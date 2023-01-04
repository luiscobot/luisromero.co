<script>
import Nav from '$lib/components/Nav.svelte';
import Newsletter from '$lib/components/Newsletter.svelte';
import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Luis Romero &middot; Constructor digital</title>
</svelte:head>

<Nav />

<header>
  <h1>Bienvenido a mi <span>jardín digital</span> donde comparto lo que estoy aprendiendo en <span>tecnología</span>.</h1>

  <div class="current-projects">
    <p>Actualmente trabajo en:</p>

    <ul>
      <li>
        <svg viewBox="0 0 8 12">
          <polygon points="5.714 4.8 5.714 0 2.92 3.522 0 7.2 2.286 7.2 2.286 12 8 4.8"/>
        </svg>
        Una aplicación para registrar los informes de las personas</li>
    </ul>
  </div>
</header>

<Newsletter />

<Footer />

<style>
header {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 10% 10%;
  background-color: #000;
  color: #fff;
  font-family: 'Geomanist', sans-serif;
}

h1 {
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 3.5rem;
}

h1 span {
  color: #ff4a00;
}

p {
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
}

ul {
  margin-top: 10px;
  padding: 0;
  list-style-type: none;
}

li {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.5rem;
  color: hsl(0, 0%, 48%);
}

li svg {
  flex-shrink: 0;
  width: 15px;
  margin: 10px;
  fill: #ff4a00;
}

.current-projects {
  margin-top: 120px;
}

@media (min-width: 640px) {
  h1,
  .current-projects {
    width: 70%;
  }
}

@media (min-width: 768px) {
  header {
    padding: 0 60px 60px;
  }

  h1,
  .current-projects {
    width: 60%;
  }

  h1 {
    font-size: 4rem;
    line-height: 4rem;
  }

  p {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  li {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1024px) {
  h1,
  .current-projects {
    width: 50%;
  }
}
</style>
