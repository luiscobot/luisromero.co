<script>
import Analytics from '$lib/components/Analytics.svelte';
import '$lib/styles/reset.css';
import '$lib/styles/style.css';
import Footer from '$lib/components/Footer.svelte';
</script>
<Analytics />

<slot />

<Footer />