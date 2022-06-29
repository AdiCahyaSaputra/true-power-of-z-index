type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full md:w-8/12 lg:w-10/12 mx-auto">
      { children }
    </div>
  )
}

export default Container;
