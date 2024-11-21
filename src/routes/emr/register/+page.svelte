<script lang="ts">
    import type { Snippet } from "svelte";
    import InputBox from "../search/InputBox.svelte";
    var params = new URLSearchParams();
</script>


<div class="flex flex-col items-center bg-base-200 gap-2 p-7 mx-5 rounded-box shadow-xl">
    <p class="text-bold text-5xl">Register</p>
    <form class="grid grid-cols-[repeat(auto-fit,minmax(20ch,1fr))] items-end gap-2 w-full">
        <InputBox label="First Name" name="fname" />
        <InputBox label="Last Name" name="lname" />
        <InputBox label="Phone #" name="phone" type="tel" />
        <InputBox label="Date of Birth" name="dob" type="date" />
        <input type="submit" value="Register" class="btn btn-secondary">
    </form>
</div>
