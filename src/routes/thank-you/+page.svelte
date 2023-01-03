<script>
import Nav from '$lib/components/Nav.svelte';
</script>

<svelte:head>
<title>¡Gracias! &middot; Luis Romero &middot; Constructor digital</title>
</svelte:head>

<Nav />

<section>
  <div class="thank-you">
    <h1>¡Gracias!</h1>
    <h2>He recibido correctamente tu correo electrónico</h2>
  </div>
</section>

<style>
section {
  position: absolute;
  inset: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10%;
  background-color: #000;
  color: #fff;
  font-family: 'Geomanist', sans-serif;
}

.thank-you {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  text-align: center;
}

@media (min-width: 768px) {
  section {
    padding: 60px;
  }
}
</style>