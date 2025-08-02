interface Course {
  id: string | number;
  title: string;
}

interface Semester {
  name: string;
  courses: Course[];
}

interface ProgramTableProps {
  semester: Semester;
  year: string;
}

export default function ProgramTable({ semester, year }: ProgramTableProps) {
  return (
    <div className="mb-4 overflow-hidden rounded-lg border border-gray-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse" dir="rtl">
          <thead>
            <tr className="bg-teal-600 text-center text-lg font-bold text-white">
              <th className="w-10 border-r border-teal-500 px-4 py-3">الرقم</th>
              <th className="border-r border-teal-500 px-4 py-3">المقررات </th>
              {/* <th className="border-r border-teal-500 px-4 py-3">السنة</th>
              <th className="px-4 py-3">الفصل</th> */}
            </tr>
          </thead>
          <tbody>
            {semester.courses.map((course, index) => (
              <tr
                key={course.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border-r border-gray-200 px-4 py-2 text-center text-gray-700">
                  {index + 1}
                </td>
                <td className="border-r border-gray-200 px-4 py-2 text-center text-lg text-gray-800">
                  {course.title}
                </td>
                {/* <td className="border-r border-gray-200 px-4 py-2 text-center text-gray-600">
                  {year}
                </td>
                <td className="px-4 py-2 text-center text-gray-600">
                  {semester.name}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-teal-600 px-4 py-2 text-center text-sm text-white">
        إجمالي: {semester.courses.length} مقرر
      </div>
    </div>
  );
}
