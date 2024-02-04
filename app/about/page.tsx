import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div>
      <h1 className={title()}>About</h1>
      <ul>
        <li>Founder : Harsh Jani</li>
        <li>Co Founder : Brijesh Damor</li>
        <li>Electronics Expert : Mithilesh Pawar</li>
        <li>3D Design : Darvik</li>
      </ul>
    </div>
  );
}
