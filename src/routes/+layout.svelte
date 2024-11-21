<script lang="ts">
	import "../app.css";
	import { onMount } from "svelte";
	import { themeChange } from "theme-change";
	import { themes } from "$lib/themes";
	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(async () => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
	let { children } = $props();
</script>

<svelte:head>
	<script>
		try {
			document.documentElement.setAttribute(
				"data-theme",
				localStorage.getItem("theme"),
			);
		} catch (e) {}
	</script>
</svelte:head>

{#snippet themebox(themename: string)}
	<li>
		<input
			type="radio"
			name="theme-dropdown"
			class="theme-controller btn btn-sm btn-block btn-ghost justify-start"
			aria-label={themename}
			value={themename}
			data-set-theme={themename}
		/>
	</li>
{/snippet}
{#snippet theme_dropdown()}
	<div class="dropdown dropdown-end">
		<div tabindex="0" role="button" class="btn m-1">
			Theme
			<svg
				width="12px"
				height="12px"
				class="inline-block h-2 w-2 fill-current opacity-60"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 2048 2048"
			>
				<path
					d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"
				></path>
			</svg>
		</div>
		<ul
			class="dropdown-content menu bg-base-200 rounded-box z-[1] p-2 shadow-2xl gap-2 flex flex-col max-h-[50vh] overflow-y-visible"
		>
			<div class="py-2 flex flex-col gap-1 overflow-y-scroll px-3">
				{#each themes as theme}
					{@render themebox(theme)}
				{/each}
			</div>
		</ul>
	</div>
{/snippet}
{#snippet navbar()}
	<div class="navbar shadow-md mb-5">
		<div class="flex-1">
			<a class="btn btn-ghost text-xl" href="/">JATC EMR</a>
		</div>
		{@render theme_dropdown()}
	</div>
{/snippet}
{#snippet footer()}
	<footer class="footer bg-base-300 text-base-content p-10 mt-5">
		<nav>
			<h6 class="footer-title">Pages</h6>
			<a class="link link-hover" href="/login">Login</a>
			<a class="link link-hover" href="/">Root</a>
			<a href="/emr" class="link link-hover">EMR</a>
		</nav>
	</footer>
{/snippet}

<div class="flex flex-col min-h-screen">
	{@render navbar()}
	<div class="flex-grow">
	{@render children()}
	</div>
	{@render footer()}
</div>
