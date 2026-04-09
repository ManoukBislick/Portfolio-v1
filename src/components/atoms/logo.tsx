import Link from "../atoms/link";

function Logo(){
  return (
    <div style={{ fontFamily: 'var(--font-code)' }}>
      <Link
        content="<Manouk/>"
        href="#"
        color="green"
        underline={false}
        className="text-lg font-light"
      />
    </div>
  )
}

export default Logo
