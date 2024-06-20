import content from "../utils/content"

const HeadBanner = () => {
    console.log(content.bannerHeading)
    return (
        <div className="bg-[#222] text-white p-4 text-center ">
            {content.bannerHeading}
        </div>
    )
}

export default HeadBanner