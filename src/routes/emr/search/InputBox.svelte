<script lang="ts">
    interface InputBoxArgs {
        label: string;
        name: string;
        type?: string;
    }
    let {label,name,type: type="text"}: InputBoxArgs = $props()
</script>

<label class="form-control">
    <div class="label">
        <span class="label-text">{label}</span>
    </div>
    <input type={type} {name} class="input input-bordered w-full" />
</label>
