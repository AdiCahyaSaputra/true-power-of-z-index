type HeroSectionProps = {
    visible: boolean
}

const HeroSection: React.FC<HeroSectionProps> = ({ visible }) => {
    return (
    <section className="w-full h-screen relative z-20 bg-black">
        <div className={`${!visible && 'hidden'} fixed left-[50%] -translate-x-[50%] flex h-full flex-col justify-center items-center text-white`}>
        <h1 className="md:text-xl text-lg font-bold">Adi Cahya Saputra</h1>
        <p className='sm:text-sm'>Software Engineer</p>
        </div>
    </section>
    )
}

export default HeroSection;