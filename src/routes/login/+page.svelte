<script lang="ts">
    import type { PageData } from "./$types";
    import type { ActionData } from "./$types";
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    let { form }: { form: ActionData } = $props();
    let coolinfo = $state("")
</script>

<div class="flex flex-row content-start justify-center">
    <div class="flex flex-col gap-2">
        <div class="card shadow-xl bg-base-200/75">
            <form class="card-body" method="POST" use:enhance={() => {
                    return async ({result,update}) =>
                    {
                        if (result.type == "success") {
                            goto("/emr")
                        }
                        else {
                            coolinfo = "something went wrong."
                            update()
                        }
                    }
            }}>
                <h1 class="card-title">Login</h1>
                <label
                    for="username"
                    class="input input-bordered flex items-center gap-2"
                >
                    Username
                    <input
                        type="text"
                        name="username"
                        id="username"
                        class="grow"
                    />
                </label>
                <label
                    for="password"
                    class="input input-bordered flex items-center gap-2"
                >
                    Password
                    <input
                        type="password"
                        name="password"
                        id="password"
                        class="grow"
                    />
                </label>
                <div class="grid grid-cols-2 gap-2">
                    <input
                        type="submit"
                        value="Login"
                        class="btn btn-primary"
                    />
                </div>
            </form>
        </div>
        <div class="flex justify-center">
            {#if coolinfo!=""}
                <div class="alert alert-warn w-fit">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 shrink-0 stroke-current"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <p>{coolinfo}</p>
                </div>
            {/if}
        </div>
    </div>
</div>
