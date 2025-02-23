declare namespace API {
  interface GenGetBatchGenCodeParams {
    /** 业务生成表名称，多个表用,分隔 */
    tables: string;
  }

  interface GenGetColumnListParams {
    /** 生成业务表编号 */
    tableId: number;
  }

  interface GenGetDownloadParams {
    /** 业务生成表名称 */
    tableName: string;
  }

  interface GenGetGenCodeParams {
    /** 业务生成表名称 */
    tableName: string;
  }

  interface GenGetInfoParams {
    /** 生成表编号 */
    tableId: number;
  }

  interface GenGetPreviewParams {
    /** 代码生成表编号 */
    tableId: number;
  }

  interface GenGetSynchDbParams {
    /** 业务生成表名称 */
    tableName: string;
  }

  interface GenInfoVo {
    /** 查询到的生成业务信息 */
    info: GenTableRes;
    /** 查询到的生成业务字段列表 */
    rows: GenTableColumnRes[];
    /** 所有生成业务信息列表 */
    tables: GenTableRes[];
  }

  interface GenPostImportTableParams {
    /** 业务生成表名称组 */
    tables: string;
  }

  interface GenPostRemoveParams {
    /** 代码生成表编号组 */
    tableIds: number;
  }

  interface GenTableColumnReq {
    /** 列描述 */
    columnComment?: string;
    /** 编号 */
    columnId?: number;
    /** 列名称 */
    columnName?: string;
    /** 列类型 */
    columnType?: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 字典类型 */
    dictType?: string;
    /** 显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件） */
    htmlType?: string;
    /** 是否编辑字段（1是） */
    isEdit?: string;
    /** 是否自增（1是） */
    isIncrement?: string;
    /** 是否为插入字段（1是） */
    isInsert?: string;
    /** 是否列表字段（1是） */
    isList?: string;
    /** 是否主键（1是） */
    isPk?: string;
    /** 是否查询字段（1是） */
    isQuery?: string;
    /** 是否必填（1是） */
    isRequired?: string;
    /** JAVA字段名 */
    javaField?: string;
    /** JAVA类型 */
    javaType?: string;
    /** 查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围） */
    queryType?: string;
    /** 排序 */
    sort?: number;
    /** 归属表编号 */
    tableId?: number;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface GenTableColumnRes {
    capJavaField?: string;
    /** 列描述 */
    columnComment?: string;
    /** 编号 */
    columnId?: number;
    /** 列名称 */
    columnName?: string;
    /** 列类型 */
    columnType?: string;
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 字典类型 */
    dictType?: string;
    edit?: boolean;
    /** 显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件） */
    htmlType?: string;
    increment?: boolean;
    insert?: boolean;
    /** 是否编辑字段（1是） */
    isEdit?: string;
    /** 是否自增（1是） */
    isIncrement?: string;
    /** 是否为插入字段（1是） */
    isInsert?: string;
    /** 是否列表字段（1是） */
    isList?: string;
    /** 是否主键（1是） */
    isPk?: string;
    /** 是否查询字段（1是） */
    isQuery?: string;
    /** 是否必填（1是） */
    isRequired?: string;
    /** JAVA字段名 */
    javaField?: string;
    /** JAVA类型 */
    javaType?: string;
    list?: boolean;
    pk?: boolean;
    query?: boolean;
    /** 查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围） */
    queryType?: string;
    required?: boolean;
    /** 排序 */
    sort?: number;
    superColumn?: boolean;
    /** 归属表编号 */
    tableId?: number;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
    usableColumn?: boolean;
  }

  interface GenTablePageQuery {
    /** 开始创建时间 */
    beginCreateTime?: string;
    /** 结束创建时间 */
    endCreateTime?: string;
    /** 排序的方向 */
    isAsc?: string;
    /** 排序列 */
    orderByColumn?: string;
    /** 当前页数 */
    pageNum?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 表描述 */
    tableComment?: string;
    /** 表名称 */
    tableName?: string;
  }

  interface GenTableReq {
    /** 生成业务名 */
    businessName: string;
    /** 表名称 */
    className: string;
    /** 表列信息 */
    columns: GenTableColumnReq[];
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    /** 生成作者 */
    functionAuthor: string;
    /** 生成功能名 */
    functionName: string;
    /** 生成路径（不填默认项目路径） */
    genPath?: string;
    /** 生成代码方式（0zip压缩包 1自定义路径） */
    genType?: string;
    /** 菜单id列表 */
    menuIds?: number[];
    /** 生成模块名 */
    moduleName: string;
    /** 其它生成选项 */
    options?: string;
    /** 生成包路径 */
    packageName: string;
    /** 传入参数（暂时预留） */
    params?: Record<string, any>;
    /** 上级菜单ID字段 */
    parentMenuId?: string;
    /** 上级菜单名称字段 */
    parentMenuName?: string;
    /** 主键信息 */
    pkColumn?: GenTableColumnReq;
    /** 备注 */
    remark?: string;
    /** 子表信息 */
    subTable?: GenTableReq;
    /** 本表关联父表的外键名 */
    subTableFkName?: string;
    /** 关联父表的表名 */
    subTableName?: string;
    /** 表描述 */
    tableComment: string;
    /** 编号 */
    tableId?: number;
    /** 表名称 */
    tableName: string;
    /** 使用的模板（crud单表操作 tree树表操作 sub主子表操作） */
    tplCategory?: string;
    /** 树编码字段 */
    treeCode?: string;
    /** 树名称字段 */
    treeName?: string;
    /** 树父编码字段 */
    treeParentCode?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface GenTableRes {
    /** 生成业务名 */
    businessName: string;
    /** 表名称 */
    className: string;
    /** 表列信息 */
    columns: GenTableColumnRes[];
    /** 创建者 */
    createBy?: string;
    /** 创建时间 */
    createTime?: string;
    crud?: boolean;
    /** 生成作者 */
    functionAuthor: string;
    /** 生成功能名 */
    functionName: string;
    /** 生成路径（不填默认项目路径） */
    genPath?: string;
    /** 生成代码方式（0zip压缩包 1自定义路径） */
    genType?: string;
    /** 菜单id列表 */
    menuIds?: number[];
    /** 生成模块名 */
    moduleName: string;
    /** 其它生成选项 */
    options?: string;
    /** 生成包路径 */
    packageName: string;
    /** 传入参数（暂时预留） */
    params?: Record<string, any>;
    /** 上级菜单ID字段 */
    parentMenuId?: string;
    /** 上级菜单名称字段 */
    parentMenuName?: string;
    /** 主键信息 */
    pkColumn?: GenTableColumnRes;
    /** 备注 */
    remark?: string;
    sub?: boolean;
    /** 子表信息 */
    subTable?: GenTableRes;
    /** 本表关联父表的外键名 */
    subTableFkName?: string;
    /** 关联父表的表名 */
    subTableName?: string;
    /** 表描述 */
    tableComment: string;
    /** 编号 */
    tableId?: number;
    /** 表名称 */
    tableName: string;
    /** 使用的模板（crud单表操作 tree树表操作 sub主子表操作） */
    tplCategory?: string;
    tree?: boolean;
    /** 树编码字段 */
    treeCode?: string;
    /** 树名称字段 */
    treeName?: string;
    /** 树父编码字段 */
    treeParentCode?: string;
    /** 更新者 */
    updateBy?: string;
    /** 更新时间 */
    updateTime?: string;
  }

  interface ResponseGenInfoVo {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: GenInfoVo;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseMapstringstring {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: Record<string, any>;
    /** 消息内容 */
    msg: string;
  }

  interface ResponseVoid {
    /** 消息状态码 */
    code: number;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataGenTable {
    /** 列表数据 */
    data: GenTableRes[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataGenTableColumn {
    /** 列表数据 */
    data: GenTableColumnRes[];
    /** 总记录数 */
    total: number;
  }

  interface TableDataInfoGenTable {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataGenTable;
    /** 消息内容 */
    msg: string;
  }

  interface TableDataInfoGenTableColumn {
    /** 消息状态码 */
    code: number;
    /** 数据对象 */
    data: TableDataGenTableColumn;
    /** 消息内容 */
    msg: string;
  }
}
