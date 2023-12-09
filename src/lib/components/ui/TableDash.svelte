<script>
  const nameCol= ['x ', 'num', 'ass', 'til', 'atrsin']
  let rows = [
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
    {'s':'s','num':'t','ass':'w','til':'m','stu':'j'},
  ]
</script>
<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>

      {#each nameCol as col}
        <th>{col}</th>
      {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as row}
        <tr>
          <td>{row.s}</td>
          <td>{row.num}</td>
          <td>{row.ass}</td>
          <td>{row.til}</td>
          <td>{row.stu}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
