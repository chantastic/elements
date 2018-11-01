import "../modules/button.css";
import Button from "../modules/button.js";

export default function() {
  return (
    <main>
      <a href="/">Back</a>
      <h2>Variants</h2>
      <section>
        <h3>fallback</h3>
        <Button>height=</Button>
        <Button variant="action">variant=action</Button>
        <Button variant="create">variant=create</Button>
        <Button variant="destroy">variant=destroy</Button>
        <Button variant="update">variant=update</Button>
        <p>
          <em>not exhaustive</em>
        </p>
      </section>

      <section
        style={{
          "--theme-color-action": "#1c7ed6",
          "--theme-color-update": "#f59f00",
          "--theme-color-destroy": "#e03131",
          "--theme-color-create": "#37b24d",
          "--theme-color-default": "#ced4da"
        }}
      >
        <h3>themed</h3>
        <Button>height=</Button>
        <Button variant="action">variant=action</Button>
        <Button variant="create">variant=create</Button>
        <Button variant="destroy">variant=destroy</Button>
        <Button variant="update">variant=update</Button>
      </section>

      <section>
        <h2>Height</h2>
        <Button height={2}>height=2</Button>
        <Button height={3}>height=3</Button>
        <Button>height=</Button>
        <Button height={4}>height=4</Button>
        <Button height={5}>height=5</Button>
        <Button height={6}>height=6</Button>
        <Button height={7}>height=7</Button>
        <Button height={8}>height=8</Button>
        <Button height={1}>
          height=1 (low out of band)
        </Button>
        <Button height={9}>
          height=9 (high out of band)
        </Button>
        <p>
          <em>not exhaustive</em>
        </p>
      </section>
    </main>
  );
}
