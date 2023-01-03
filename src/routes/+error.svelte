<script>
import { page } from '$app/stores';
</script>

<svelte:head>
<title>{$page.status} &middot; Luis Romero &middot; Constructor digital</title>
</svelte:head>

<section>
  <div class="error">
    <h1 class="status">{$page.status}</h1>
    <h2 class="message">{$page.error.message}</h2>
  </div>
</section>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000;
  color: #fff;
  font-family: 'Geomanist', sans-serif;
}

.error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.status {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 3.5rem;
}

.message {
  font-size: 2rem;
  font-weight: normal;
  line-height: 2rem;
}

@media (min-width: 1024px) {
  .error {
    flex-direction: row;
    gap: 80px;
  }

  .status {
    position: relative;
  }

  .status::after {
    position: absolute;
    content: '';
    translate: calc(40px - 1px);
    width: 2px;
    height: 100%;
    background-color: #ff4a00;
  }
}
</style>
