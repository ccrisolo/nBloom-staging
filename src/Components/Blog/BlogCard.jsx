import UserImage from '../../assets/userImage.svg'

function BlogCard({ name, title }) {
    return (
        <div className="bg-white shadow br p-2 cp">
            <div className="d-flex justify-content-between">
                <div className="mt-3 ms-2">
                    <div className="bp-card__name">
                        {name}
                    </div>
                    <div className="bp-card__title">
                        {title}
                    </div>
                </div>
                <div className="bp-card__image">
                    <img className="w-100 h-100 br" src={UserImage} alt="Blogger Image" />
                </div>
            </div>
        </div>
    )
}

export default BlogCard
