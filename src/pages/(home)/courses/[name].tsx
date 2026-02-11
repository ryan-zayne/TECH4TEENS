import { useParams } from "react-router";
import { courseDetails } from "../-components/constants/course-details";
import { Main } from "../-components/Main";

function CourseDetailPage() {
	const { name } = useParams();

	const courseDetail = courseDetails.find((detail) => name && detail.href.endsWith(name));

	if (!courseDetail) {
		return <Main>Not found</Main>;
	}

	return <Main className="pb-[100px]">{courseDetail.title}</Main>;
}

export default CourseDetailPage;
