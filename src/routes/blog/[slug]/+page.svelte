<script>
  export let data;
</script>

<p class="font-bold text-center text-green">{data.content}</p>

<div>
  {#each data.cart as { id, quantity } (id)}
    <div>{id} - {quantity}</div>
  {/each}
</div>
