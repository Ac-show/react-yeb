import ACLogin from '@/pages/login'
import ACHome from '@/pages/home'

// homeChildPage
// baseInfo
import ACBaseInfo from '../pages/home/c_page/staffInfo/baseInfo'
// salary
import ACSalaryCheck from '../pages/home/c_page/salary/salaryCheck'
import ACSalaryLast from '../pages/home/c_page/salary/salaryLast'
import ACSalarySearch from '../pages/home/c_page/salary/salarySearch'
import ACSalaryStaff from '../pages/home/c_page/salary/salaryStaff'
import ACSalaryTable from '../pages/home/c_page/salary/salaryTable'
// staff
import ACStaffInfo from '../pages/home/c_page/staff/staffInfo'
import ACStaffMove from '../pages/home/c_page/staff/staffMove'
import ACStaffRAP from '../pages/home/c_page/staff/staffRAP'
import ACStaffSalary from '../pages/home/c_page/staff/staffSalary'
import ACStaffTrain from '../pages/home/c_page/staff/staffTrain'
// statistics
import ACStaHrInfo from '../pages/home/c_page/statistics/staHrInfo'
import ACStaHrRecord from '../pages/home/c_page/statistics/staHrRecord'
import ACStaStaff from '../pages/home/c_page/statistics/staStaff'
import ACStaSum from '../pages/home/c_page/statistics/staSum'
// system
import ACSysInfo from '../pages/home/c_page/system/sysInfo'
import ACSysInit from '../pages/home/c_page/system/sysInit'
import ACSysLogo from '../pages/home/c_page/system/sysLogo'
import ACSysRecover from '../pages/home/c_page/system/sysRecover'
import ACSysSet from '../pages/home/c_page/system/sysSet'
import ACSysStaff from '../pages/home/c_page/system/sysStaff'


const homeChildPage = [
  {
    path: '/home/baseinfo',
    exact: true,
    component: ACBaseInfo
  },
  {
    path: '/home/salary',
    exact: true,
    component: ACSalaryCheck
  },
  {
    path: '/home/salary/last',
    component: ACSalaryLast
  },
  {
    path: '/home/salary/serach',
    component: ACSalarySearch
  },
  {
    path: '/home/salary/staff',
    component: ACSalaryStaff
  },
  {
    path: '/home/salary/salarttable',
    component: ACSalaryTable
  },
  {
    path: '/home/staff',
    exact: true,
    component: ACStaffInfo
  },
  {
    path: '/home/staff/move',
    component: ACStaffMove
  },
  {
    path: '/home/staff/rap',
    component: ACStaffRAP
  },
  {
    path: '/home/staff/salary',
    component: ACStaffSalary
  },
  {
    path: '/home/staff/train',
    component: ACStaffTrain
  },
  {
    path: '/home/statistics/hrinfo',
    component: ACStaHrInfo
  },
  {
    path: '/home/statistics/hrrecord',
    component: ACStaHrRecord
  },
  {
    path: '/home/statistics/staff',
    component: ACStaStaff
  },
  {
    path: '/home/statistics',
    exact: true,
    component: ACStaSum
  },
  {
    path: '/home/system',
    exact: true,
    component: ACSysInfo
  },
  {
    path: '/home/system/init',
    component: ACSysInit
  },
  {
    path: '/home/system/logo',
    component: ACSysLogo
  },
  {
    path: '/home/system/recover',
    component: ACSysRecover
  },
  {
    path: '/home/system/set',
    component: ACSysSet
  },
  {
    path: '/home/system/staff',
    component: ACSysStaff
  }
]



const router = [
  {
    path: '/',
    exact: true,
    component: ACLogin
  },
  {
    path: '/home',
    component: ACHome,
    router: homeChildPage
  }
]

export default router