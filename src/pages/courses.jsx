import { httpInterceptedService } from "@core/http-service";
import CourseList from "../features/coursers/components/CourseList";
import { Await, useLoaderData, defer } from "react-router-dom";
import { Suspense } from "react";

const Courses = () => {
  // const data = useLoaderData();

  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">افزودن دوره ی جدید</a>
        </div>
        {/* way-2 */}
        <CourseList />

        {/* way-1 */}

        {/* <Suspense
          fallback={<p className="text-info">درحال دریافت اطلاعات...</p>}
        >
          <Await resolve={data.courses}>
            {(loadCourses) => {
              <CourseList courses={loadCourses} />;
            }}
          </Await>
        </Suspense> */}
      </div>
    </div>
  );
};

export default Courses;

export async function coursesLoader() {
  // way-1 showing page then geting data

  // return defer({
  //   courses: loadCourses(),
  // });

  // way 2 - should get api data then showing page
  const response = await httpInterceptedService.get("/Course/list");
  console.log(response.data);
  return response.data;
}

// step-2 way-2

// async function loadCourses() {
//   const response = await httpInterceptedService.get("/Course/list");
//   return response.data;
// }
