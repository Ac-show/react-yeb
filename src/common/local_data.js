import {Button} from 'element-react'

export const basicTableCol = {
  columns: [
    {
      type: 'selection',
      label: null,
      // fixed: 'left',
    },
    {
      className: 'columns', label: '姓名',
      width: 100,
      prop: 'name',
      fixed: 'left',
    },
    { className: 'columns', label: '工号', prop: 'workID', width: 100 },
    { className: 'columns', label: '性别', prop: 'gender', width: 61 },
    { className: 'columns', label: '出生日期', prop: 'birthday', width: 110 },
    { className: 'columns', label: '身份证号码', prop: 'idCard', width: 180 },
    { className: 'columns', label: '婚姻情况', prop: 'wedlock', width: 100 },
    {
      className: 'columns', label: '民族', prop: 'nation', width: 100,
      render: nation => (
        <span>{nation.name}</span>
      )
    },
    { className: 'columns', label: '籍贯', prop: 'nativePlace', width: 120 },
    {
      className: 'columns', label: '政治面貌', prop: 'politicsStatus', width: 150,
      render: politicsStatus => (
        <span>{politicsStatus.name}</span>
      )
    },
    { className: 'columns', label: '电子邮件', prop: 'email', width: 200 },
    { className: 'columns', label: '电话号码', prop: 'phone', width: 120 },
    { className: 'columns', label: '联系地址', prop: 'address', width: 400 },
    {
      className: 'columns', label: '所属部门', prop: 'department', width: 120,
      render: department => (
        <span>{department.name}</span>
      )
    },
    {
      className: 'columns', label: '职称', prop: 'joblevel', width: 120,
      render: joblevel => (
        <span>{joblevel.name}</span>
      )
    },
    {
      className: 'columns', label: '职位', prop: 'position', width: 120,
      render: position => (
        <span>{position.name}</span>
      )
    },
    { className: 'columns', label: '聘用形式', prop: 'engageForm', width: 120 },
    { className: 'columns', label: '最高学历', prop: 'tiptopDegree', width: 100 },
    { className: 'columns', label: '毕业院校', prop: 'school', width: 180 },
    { className: 'columns', label: '专业', prop: 'specialty', width: 180 },
    { className: 'columns', label: '在职状态', prop: 'workState', width: 90 },
    { className: 'columns', label: '入职日期', prop: 'beginDate', width: 110 },
    { className: 'columns', label: '转正日期', prop: 'conversionTime', width: 110 },
    { className: 'columns', label: '合同起始日期', prop: 'beginContract', width: 110 },
    { className: 'columns', label: '合同截止日期', prop: 'endContract', width: 110 },
    {
      className: 'columns', label: '合同期限', prop: 'contractTerm', width: 90,
      render: contractTerm => (
        <span>{contractTerm.contractTerm + '年'}</span>
      )
    },
    {
      className: 'columns', label: '操作', width: 250, fixed: 'right',
      render: () => (
        <span>
          <Button className="button" size="small" style={{ marginRight: 0 }}>编辑</Button>
          <Button className="button" size="small" type="primary" style={{ marginRight: 0, color: 'white' }}>查看高级资料</Button>
          <Button className="button" size="small" style={{ backgroundColor: '#F78383', color: 'white' }}>删除</Button>
        </span>
      )
    }
  ]
}
