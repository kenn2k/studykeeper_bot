import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
	return (
		<div className=" p-[5%] mt-20">
			<SkeletonTheme
				baseColor="#2C2C2C"
				highlightColor="#3A3A3A"
			>
				<div className="w-full p-6 bg-[#2C2C2C] rounded-lg shadow-lg">
					<div className=" flex justify-between">
						<Skeleton
							height={30}
							width="100px"
							className="mb-4"
						/>
						<Skeleton
							height={30}
							width="100px"
							className="mb-4"
						/>
					</div>
					<Skeleton
						height={80}
						width="100%"
						className="mb-4"
					/>
				</div>
			</SkeletonTheme>
		</div>
	);
};

export default Loading;
