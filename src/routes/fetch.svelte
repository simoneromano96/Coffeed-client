<script context="module" lang="ts">
  export async function preload(page, session) {
    try {
      const { query, options } = await import("../classes/graphqlClient");
      const gotQL = await import("gotql");

      const response = await gotQL.query(
        "http://localhost:8000/",
        query,
        options
      );
      console.log(response);
      console.log(response.data);
      const {coffees} = response.data;
      return { coffees };
    } catch (e) {
      this.error(500, "coffees preload error: " + e.message);
    }
  }
</script>

<script>
  export let coffees;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
</script>

<style>
  caption {
    font-size: 2rem;
    font-weight: bold;
  }

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: solid lightgray 1px;
    padding: 0.5rem;
  }

  .right {
    text-align: right;
  }
</style>

<svelte:head>
  <title>Employees</title>
</svelte:head>

<table>
  <caption>Employees</caption>
  <tr>
    <th>Name</th>
    <th>Age</th>
    <th>Salary</th>
  </tr>
  {#each coffees as coffee}
    <tr>
      <td>{coffee.name}</td>
      <td>{coffee.imageUrl}</td>
    </tr>
    <tr />
  {/each}
</table>
