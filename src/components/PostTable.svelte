<script>
  export let posts;
</script>

<table>
  <thead>
    <tr>
      <th class="border border-slate-600">Id</th>
      <th class="border border-slate-600">UserId</th>
      <th class="border border-slate-600">Title</th>
      <th class="border border-slate-600">Body</th>
    </tr>
  </thead>
  <tbody>
    {#each posts as post}
      <tr>
        <td class="border border-slate-600">{post.id}</td>
        <td class="border border-slate-600">{post.userId}</td>
        <td class="border border-slate-600">{post.title}</td>
        <td class="border border-slate-600">{post.body}</td>
      </tr>
    {/each}
  </tbody>
</table>
