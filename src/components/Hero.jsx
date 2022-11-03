export const Hero = ({ title, children }) => {
  return (
    <>
      <div>
        <div>
          <h1>{title}</h1>
          {children}
        </div>
      </div>
    </>
  )
}
