<script lang="ts">
    import InputBox from "./InputBox.svelte";
    import type { SearchResult } from "./+page.server";
    let { data }: { data: SearchResult } = $props();
</script>
<div class="flex flex-col content-start justify-center mx-5 gap-5">
    <div class="card shadow-xl bg-base-200/75 w-full">
        <form class="card-body flex-col" method="GET">
            <h1 class="card-title flex justify-between">
                <p>Search for Patient</p>
                <input
                    type="submit"
                    class="btn btn-secondary"
                    value="Register"
                    formaction="/emr/register"
                />
            </h1>
            <div
                class="grid grid-cols-[repeat(auto-fit,minmax(20ch,1fr))] items-end gap-2"
            >
                <InputBox label="First Name" name="fname" />
                <InputBox label="Last Name" name="lname" />
                <InputBox label="Phone #" name="phone" type="tel" />
                <InputBox label="Chart #" name="chart" type="number" />
                <InputBox label="Date of Birth" name="dob" type="date" />
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
                            <td class="text-center">
                                <a
                                    href="/emr/{person.chartnum}"
                                    class="btn btn-primary btn-xs">Open</a
                                >
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
</div>
