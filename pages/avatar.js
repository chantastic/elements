import "../modules/avatar.css";
import Avatar from "../modules/avatar.js";
import "../modules/sheet.css";
import Sheet from "../modules/sheet.js";

export default function() {
  return (
    <main
      style={{
        backgroundColor: "#fafafa",
        padding: "2rem"
      }}
    >
      <Sheet>
        <Avatar
          size={3}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={4}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={5}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          src="/static/benedict_cumberbatch.jpg"
          border
          style={{ borderRadius: "1em" }}
        />
        <Avatar
          size={6}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={7}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={8}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={9}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={10}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={11}
          src="/static/benedict_cumberbatch.jpg"
        />
        <Avatar
          size={12}
          src="/static/benedict_cumberbatch.jpg"
        />
      </Sheet>
    </main>
  );
}
