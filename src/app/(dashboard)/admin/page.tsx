import Announcements from "@/components/Announcements"
import AttendanceChart from "@/components/AttendanceChart"
import CountChart from "@/components/CountChart"
import EventCalender from "@/components/EventCalender."
import FinanceChart from "@/components/FinanceChart"
import UserCard from "@/components/UserCard"

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* LEFT */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="students"/>
          <UserCard type="teachers"/>
          <UserCard type="parents"/>
          <UserCard type="staffs"/>
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

         {/* Bottom Charts */}
         <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalender />
        <Announcements />
      </div>
    </div>
  )
}

export default AdminPage