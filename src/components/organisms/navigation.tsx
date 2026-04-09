import Logo from "../atoms/logo";
import Link from "../atoms/link";

function Navigation(){
  return (
    <section className="sticky top-0 z-50 flex flex-row justify-between bg-stone-950/25 py-4 backdrop-blur-[5px]">
      <div>
        <Logo />
      </div>
      <div className="flex gap-4">
        <Link content="Home" href="#" color="green" />
        <Link content="About" href="#" color="green" />
        <Link content="Projects" href="#" color="green" />
        <Link content="Contact" href="#" color="green" />
      </div>
    </section>
  )
}

export default Navigation
