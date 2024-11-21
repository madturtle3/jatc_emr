<script lang="ts">
    import type { SearchResult } from "./+page.server";
    let { data }: { data: SearchResult } = $props();
</script>

{#snippet inputbox(label: string, name: string, input_type: string = "text")}
    <label class="form-control">
        <div class="label">
            <span class="label-text">{label}</span>
        </div>
        <input type={input_type} {name} class="input input-bordered w-full" />
    </label>
{/snippet}
<div class="flex flex-col content-start justify-center mx-5 gap-5">
    <div class="card shadow-xl bg-base-200/75 w-full">
        <form class="card-body flex-col" method="GET" action="/emr/search/" data-sveltekit-reload>
            <h1 class="card-title">Search for Patient</h1>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(20ch,1fr))] items-end gap-2"
            >
                {@render inputbox("First Name", "fname")}
                {@render inputbox("Last Name", "lname")}
                {@render inputbox("Phone #", "phone")}
                {@render inputbox("Chart #", "chart", "number")}
                {@render inputbox("Date of Birth", "dob", "date")}
                <input type="submit" class="btn btn-primary" />
            </div>
        </form>
    </div>
    {#if data.people.length > 0}
        <div class="flex justify-center mt-5">
            <table class="table table-pin-rows w-fit">
                <!-- head -->
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Date of Birth</th>
                        <th>Phone #</th>
                        <th>Chart # </th>
                        <th>Link to Record</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data.people as person}
                        <tr>
                            <td>
                                {person.firstName}
                            </td>
                            <td>
                                {person.lastName}
                            </td>
                            <td>
                                {person.dob.toLocaleDateString("en-US")}
                            </td>
                            <td>
                                {person.phone}
                            </td>
                            <td>
                                {person.chartnum}
                            </td>
                            <td>
                                <a href="/emr/{person.chartnum}" class="btn btn-primary btn-xs">Open</a>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</div>
