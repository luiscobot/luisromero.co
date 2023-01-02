<script>
import { PUBLIC_NEWSLETTER_ID } from '$env/static/public';
</script>

<section>
  <h2>
    <svg viewBox="0 0 576 512">
      <path d="M416 224V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v160c0 35.3 28.7 64 64 64v54.2c0 8 9.1 12.6 15.5 7.8l82.8-62.1H352c35.3.1 64-28.6 64-63.9zm96-64h-64v64c0 52.9-43.1 96-96 96H192v64c0 35.3 28.7 64 64 64h125.7l82.8 62.1c6.4 4.8 15.5.2 15.5-7.8V448h32c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64z" class=""></path>
    </svg>
    <span>Suscríbete a mi <mark>periódico mensual</mark> de tecnología.</span>
  </h2>

  <form action="https://forms.gosquared.com/post/{ PUBLIC_NEWSLETTER_ID }/b2960c8f-87c2-45f6-b42d-9b0aa460683f" method="POST">
    <label for="email">Correo electrónico</label>
    <input type="email" name="email" id="email" placeholder="Ingresa tu correo electrónico" required />
    <button type="submit">Suscríbete al periódico</button>
  </form>
</section>

<style>
section {
  padding: 10%;
	background-color: #000;
  color: #fff;
  font-family: 'Geomanist', sans-serif;
}

h2 {
  display: inline-flex;
  align-items: flex-start;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
}

h2 mark {
  background-color: hsl(17, 100%, 50%);
  color: hsl(0, 0%, 100%);
}

h2 svg {
  fill: hsl(17, 100%, 50%);
  width: 30px;
  margin-right: 10px;
  flex-shrink: 0;
}

form {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  font-family: 'Geomanist', sans-serif;
}

form label,
form input,
form button {
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.5rem;
}

form input,
form button {
  margin-top: 10px;
  padding: 10px;
  border: none;
  border-radius: 6px;
}

form input {
  background-color: hsla(0, 0%, 48%, .1);
}

form input::placeholder {
  color: hsl(0, 0%, 24%);
}

form input:focus,
form input:hover {
  outline: 2px solid hsla(0, 0%, 24%, .2);
}

form button {
  background-color: hsl(17, 100%, 50%);
  color: hsl(0, 0%, 100%);
  cursor: pointer;
}

form::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(135deg,
              #3ca3d6 0%, #3ca3d6 16%,
              transparent 16%, transparent 21%,
              #d63c3c 21%, #d63c3c 37%,
              transparent 37%, transparent 42%,
              #3ca3d6 42%, #3ca3d6 58%,
              transparent 58%, transparent 63%,
              #d63c3c 63%, #d63c3c 79%,
              transparent 79%, transparent 84%,
              #3ca3d6 84%, #3ca3d6 100%);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

@media (min-width: 640px) {
  h2,
  form {
    width: 70%;
  }
}

@media (min-width: 768px) {
  section {
    padding: 60px;
  }

  h2,
  form {
    width: 60%;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  form label,
  form input,
  form button {
    font-size: 1.75rem;
    line-height: 1.75rem;
  }
}

@media (min-width: 1024px) {
  h2,
  form {
    width: 50%;
  }
}
</style>