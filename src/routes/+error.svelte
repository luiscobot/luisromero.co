<script>
import { page } from '$app/stores';
</script>

<svelte:head>
<title>{$page.status} &middot; Luis Romero &middot; Constructor digital</title>
</svelte:head>

<section>
  <h1>{$page.status}</h1>
  <h2>{$page.error.message}</h2>
</section>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-family: 'Geomanist', sans-serif;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 3.5rem;
}

h2 {
  font-size: 2rem;
  font-weight: normal;
  line-height: 2rem;
}

@media (min-width: 1024px) {
  section {
    flex-direction: row;
    gap: 80px;
  }

  h1 {
    position: relative;
  }

  h1::after {
    position: absolute;
    content: '';
    translate: calc(40px - 1px);
    width: 2px;
    height: 100%;
    background-color: #ff4a00;
  }
}
</style>