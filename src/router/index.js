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
    path: '/home/emp/basic',
    exact: true,
    component: ACBaseInfo
  },
  {
    path: '/home/sal/sob',
    exact: true,
    component: ACSalaryCheck
  },
  {
    path: '/home/sal/month',
    component: ACSalaryLast
  },
  {
    path: '/home/sal/search',
    component: ACSalarySearch
  },
  {
    path: '/home/sal/sobcfg',
    component: ACSalaryStaff
  },
  {
    path: '/home/sal/table',
    component: ACSalaryTable
  },
  {
    path: '/home/per/emp',
    exact: true,
    component: ACStaffInfo
  },
  {
    path: '/home/per/mv',
    component: ACStaffMove
  },
  {
    path: '/home/per/ec',
    component: ACStaffRAP
  },
  {
    path: '/home/per/salary',
    component: ACStaffSalary
  },
  {
    path: '/home/per/train',
    component: ACStaffTrain
  },
  {
    path: '/home/sta/pers',
    component: ACStaHrInfo
  },
  {
    path: '/home/sta/record',
    component: ACStaHrRecord
  },
  {
    path: '/home/sta/score',
    component: ACStaStaff
  },
  {
    path: '/home/sta/all',
    exact: true,
    component: ACStaSum
  },
  {
    path: '/home/sys/basic',
    exact: true,
    component: ACSysInfo
  },
  {
    path: '/home/sys/init',
    component: ACSysInit
  },
  {
    path: '/home/sys/log',
    component: ACSysLogo
  },
  {
    path: '/home/sys/data',
    component: ACSysRecover
  },
  {
    path: '/home/sys/cfg',
    component: ACSysSet
  },
  {
    path: '/home/sys/admin',
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