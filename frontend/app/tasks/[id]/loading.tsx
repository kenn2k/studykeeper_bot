import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
	return (
		<div className="flex items-center justify-center h-screen">
			<SkeletonTheme
				baseColor="#2C2C2C"
				highlightColor="#3A3A3A"
			>
				<div className="w-80 p-6 bg-[#2C2C2C] rounded-lg shadow-lg">
					{/* Skeleton для инпутов */}
					<Skeleton
						height={60}
						width="100%"
						className="mb-4"
					/>
					<Skeleton
						height={60}
						width="100%"
						className="mb-4"
					/>
					<Skeleton
						height={100}
						width="100%"
						className="mb-4"
					/>
					<Skeleton
						height={60}
						width="100%"
						className="mb-4"
					/>
					<Skeleton
						height={60}
						width="100%"
						className="mb-6"
					/>

					<div className=" flex items-center justify-center">
						<Skeleton
							height={40}
							width="100px"
						/>
					</div>
				</div>
			</SkeletonTheme>
		</div>
	);
};

export default Loading;
