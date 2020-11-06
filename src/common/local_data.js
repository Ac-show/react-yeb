

export const menuData = [
  {
    title: '员工资料',
    items: [
      {
        title: '基本资料',
        path: '/home/baseinfo'
      }
    ],
  },
  {
    title: '人事管理',
    items: [
      {
        title: '员工资料',
        exact: true,
        path: '/home/staff'
      },
      {
        title: '员工奖惩',
        path: '/home/staff/rap'
      },
      {
        title: '员工培训',
        path: '/home/staff/train'
      },
      {
        title: '员工调薪',
        path: '/home/staff/salary'
      },
      {
        title: '员工调动',
        path: '/home/staff/move'
      }
    ]
  },
  {
    title: '薪资管理',
    items: [
      {
        title: '工资账套管理',
        exact: true,
        path: '/home/salary'
      },
      {
        title: '员工账套管理',
        path: '/home/salary/staff'
      },
      {
        title: '工资表管理',
        path: '/home/salary/salarttable'
      },
      {
        title: '月末处理',
        path: '/home/salary/last'
      },
      {
        title: '工资表查询',
        path: '/home/salary/serach'
      }
    ]
  },
  {
    title: '统计管理',
    items: [
      {
        title: '综合信息统计',
        exact: true,
        path: '/home/statistics'
      },
      {
        title: '员工积分统计',
        path: '/home/statistics/staff'
      },
      {
        title: '人事信息统计',
        path: '/home/statistics/hrinfo'
      },
      {
        title: '人事记录统计',
        path: '/home/statistics/hrrecord'
      }
    ]
  },
  {
    title: '系统管理',
    items: [
      {
        title: '基础信息设置',
        exact: true,
        path: '/home/system'
      },
      {
        title: '系统设置',
        path: '/home/system/set'
      },
      {
        title: '操作日志管理',
        path: '/home/system/logo'
      },
      {
        title: '操作员管理',
        path: '/home/system/staff'
      },
      {
        title: '备份恢复数据库',
        path: '/home/system/recover'
      },
      {
        title: '初始化数据库',
        path: '/home/system/init'
      }
    ]
  },
]
