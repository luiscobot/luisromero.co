<svelte:head>
  <title>Luis Romero &middot; Constructor digital</title>
</svelte:head>

<header>
  <a class="logo" href="./">
    <svg viewBox="0 0 1080 1080">
      <g fill="none" fill-rule="evenodd">
        <path fill="#FF4A00" d="M991.9 210.936c-51.916 140.532-75.795 220.579-71.637 240.142 4.159 19.563 32.447 88.522 84.867 206.876-54.94-1.953-108.494 2.614-160.662 13.703-117.378 24.95-171.917 56.989-220.816 67.383-6.52 1.386-10.474-1.182-11.86-7.703-6.238-29.344 104.17-87.086 100.745-103.201-1.387-6.521-11.861-7.702-31.424-3.544-88.033 18.712-162.127 54.908-328.412 90.253-19.563 4.158-31.424-3.544-35.582-23.107l-87.323-410.822c-4.158-19.563 3.544-31.424 23.107-35.582 166.285-35.345 240.38-71.54 328.412-90.253 19.563-4.158 31.424 3.544 35.582 23.107l10.396 48.907c104.335-22.177 225.871-27.563 364.608-16.159z"/>
        <path fill="#B93600" d="M991.9 210.936c-51.916 140.532-75.795 220.579-71.637 240.142 4.159 19.563 32.447 88.522 84.867 206.876-54.94-1.953-108.494 2.614-160.662 13.703-117.378 24.95-171.917 56.989-220.816 67.383-6.52 1.386-10.474-1.182-11.86-7.703-6.238-29.344 104.17-87.086 100.745-103.201l-85.244-401.04c104.335-22.178 225.871-27.564 364.608-16.16z"/>
        <path fill="#FF4A00" d="M329.302 913.354c-8.211 9.034-19.156 15.004-32.833 17.911-13.678 2.908-26.105 1.905-37.28-3.008a10 10 0 0 1-5.757-7.075L120.12 294.005c-7.277-34.236-36.621-27.998-43.898-62.233-6.238-29.345 19.681-75.748 53.916-83.025 34.235-7.277 76.787 24.572 83.024 53.917 7.277 34.235-22.067 40.472-14.79 74.708l133.31 627.177a10 10 0 0 1-2.381 8.805z"/>
      </g>
    </svg>
  </a>

  <h1>Construyo herramientas digitales que aportan <span>beneficios reales</span> a las personas<span>.</span></h1>

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

<style>
header {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 10%;
  background-color: #000;
  color: white;
  font-family: 'geomanist-bold', sans-serif;
}

.logo {
  width: 50px;
}

h1 {
  margin-top: 20px;
  font-size: 3.5rem;
  line-height: 3.5rem;
}

h1 span {
  color: #ff4a00;
}

h1 span::selection {
  color: #000;
}

p {
  font-size: 2rem;
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
  line-height: 1.5rem;
}

li svg {
  flex-shrink: 0;
  width: 15px;
  margin: 10px;
  fill: #ff4a00;
}

.current-projects {
  margin-top: auto;
}
</style>