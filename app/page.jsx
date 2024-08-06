import Feed from '@components/Feed'

const Home  = () => {
  return (
    <div>
        <section className = "w-full flex-center flex-col">
            <h1 className="head_text text-center"> 
                Discover & Share
                <br className="max-md:hidden" />
                <span className="blue_gradient text-center"> AI-Powered Prompts </span> 
            </h1>
            <p className="desc text-center"> PromptGen is an Artificial Intelligence tool for 
                current generation to discover and share creative and interesting prompts.
                  </p>

                  <Feed /> 
        </section>
    </div>
  )
}

export default Home