import { httpInterceptedService } from "@core/http-service";
import CourseList from "../features/coursers/components/CourseList";

const Courses = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">افزودن دوره ی جدید</a>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export default Courses;

export async function coursesLoader() {
  const response = await httpInterceptedService.get("/Course/list");
  console.log(response.data);
  return response.data;
}
