import TextInput from "../TextInput";
import BlogCard from "./BlogCard";
import FilterIcon from '../../assets/filter.svg'

function BlogContainer() {
    return (
        <div className="bg-white py-3 shadow-lg mx-0 px-0">
            <div className="d-lg-none my-4">
                <div className="ap-title ms-3">
                    Blog
                </div>
            </div>
            <div className="mt-5  d-none d-lg-block">
                <div className="mx-5 px-5 d-flex justify-content-between">
                    <div className="w-75">
                        <TextInput 
                            placeholder="Search"
                            bordered={true}
                        />
                    </div>
                    <div>
                            <div className="cp p-1 px-2 br mt-3" style={{color:'#3E3E70',border:'1px solid #000',fontSize:14}}>
                            <img className="mx-2" src={FilterIcon} alt=""/>
                            Filter by category
                        </div>
                    </div>
                </div>
                <hr />
            </div>
            <div className="row gy-3 g-lg-5 justify-content-center mx-0 ">
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                <div className="col-12 col-lg-5">
                    <BlogCard
                        name="James Mann"
                        title="What should you focus on?"
                    />
                </div>
                
            </div>
        </div>
    )
}

export default BlogContainer
