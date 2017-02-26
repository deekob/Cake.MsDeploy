
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"RecycleAppProvider",
        content:"RecycleAppProvider",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"SetAclResourceType",
        content:"SetAclResourceType",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"AppPoolConfigProvider",
        content:"AppPoolConfigProvider",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"SkipDirective",
        content:"SkipDirective",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"ContentPathAspNetCoreProvider",
        content:"ContentPathAspNetCoreProvider",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"GacAssemblyProvider",
        content:"GacAssemblyProvider",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"MachineConfig Provider",
        content:"MachineConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"RunCommandProvider",
        content:"RunCommandProvider",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"DirPathProvider",
        content:"DirPathProvider",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"RegKeyProvider",
        content:"RegKeyProvider",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"ManifestProvider",
        content:"ManifestProvider",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"IMsDeployProvider",
        content:"IMsDeployProvider",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"WebServerProvider",
        content:"WebServerProvider",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"MsDeployProvider",
        content:"MsDeployProvider",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"FilePathProvider",
        content:"FilePathProvider",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"RootWebConfig Provider",
        content:"RootWebConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"MsDeployAliases",
        content:"MsDeployAliases",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"IMsDeployArgument",
        content:"IMsDeployArgument",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"AppHostAuthOverrideProvider",
        content:"AppHostAuthOverrideProvider",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"AppPoolEnable BitProvider",
        content:"AppPoolEnable BitProvider",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"BackupSettingsProvider",
        content:"BackupSettingsProvider",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"MachineConfig Provider",
        content:"MachineConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"AppPoolNetFxProvider",
        content:"AppPoolNetFxProvider",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"MsDeploySettings",
        content:"MsDeploySettings",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"WebServer Provider",
        content:"WebServer Provider",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"CertProvider",
        content:"CertProvider",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"AuthenticationScheme",
        content:"AuthenticationScheme",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"DbMySqlProvider",
        content:"DbMySqlProvider",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"BaseParameter",
        content:"BaseParameter",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"ParameterKind",
        content:"ParameterKind",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"SkipAction",
        content:"SkipAction",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"ComObject Provider",
        content:"ComObject Provider",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"DbFullSqlProvider",
        content:"DbFullSqlProvider",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"ComObject Provider",
        content:"ComObject Provider",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"ReplacementRule",
        content:"ReplacementRule",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"ContentPathLibProvider",
        content:"ContentPathLibProvider",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"AppHostSchemaProvider",
        content:"AppHostSchemaProvider",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"DbSqliteProvider",
        content:"DbSqliteProvider",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"DeclareParameter",
        content:"DeclareParameter",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"CreateAppProvider",
        content:"CreateAppProvider",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"ArchiveDirProvider",
        content:"ArchiveDirProvider",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"MetaKeyProvider",
        content:"MetaKeyProvider",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"AutoProvider",
        content:"AutoProvider",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"ContentPathProvider",
        content:"ContentPathProvider",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"UrlScanConfigProvider",
        content:"UrlScanConfigProvider",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"IisAppProvider",
        content:"IisAppProvider",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"RootWebConfig Provider",
        content:"RootWebConfig Provider",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"AppHostConfigProvider",
        content:"AppHostConfigProvider",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"RegValueProvider",
        content:"RegValueProvider",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"Direction",
        content:"Direction",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"IParameter",
        content:"IParameter",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"BackupManagerProvider",
        content:"BackupManagerProvider",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"DacpacAction",
        content:"DacpacAction",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"Operation",
        content:"Operation",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"PackageProvider",
        content:"PackageProvider",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"SetAclProvider",
        content:"SetAclProvider",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"GacInstallProvider",
        content:"GacInstallProvider",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"MsDeployRunner",
        content:"MsDeployRunner",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"AppPoolPipelineMode",
        content:"AppPoolPipelineMode",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"DbDacFxProvider",
        content:"DbDacFxProvider",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"CertStoreSettingsProvider",
        content:"CertStoreSettingsProvider",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"RecycleMode",
        content:"RecycleMode",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"SetParameter",
        content:"SetParameter",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"AppPoolPipelineProvider",
        content:"AppPoolPipelineProvider",
        description:'',
        tags:''
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RecycleAppProvider',
        title:"RecycleAppProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/SetAclResourceType',
        title:"SetAclResourceType",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolConfigProvider',
        title:"AppPoolConfigProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Directives/SkipDirective',
        title:"SkipDirective",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ContentPathAspNetCoreProvider',
        title:"ContentPathAspNetCoreProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/GacAssemblyProvider',
        title:"GacAssemblyProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/MachineConfig32Provider',
        title:"MachineConfig32Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RunCommandProvider',
        title:"RunCommandProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/DirPathProvider',
        title:"DirPathProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RegKeyProvider',
        title:"RegKeyProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ManifestProvider',
        title:"ManifestProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers/IMsDeployProvider',
        title:"IMsDeployProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/WebServerProvider',
        title:"WebServerProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers/MsDeployProvider',
        title:"MsDeployProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/FilePathProvider',
        title:"FilePathProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RootWebConfig32Provider',
        title:"RootWebConfig32Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy/MsDeployAliases',
        title:"MsDeployAliases",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy/IMsDeployArgument',
        title:"IMsDeployArgument",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppHostAuthOverrideProvider',
        title:"AppHostAuthOverrideProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolEnable32BitProvider',
        title:"AppPoolEnable32BitProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/BackupSettingsProvider',
        title:"BackupSettingsProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/MachineConfig64Provider',
        title:"MachineConfig64Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolNetFxProvider',
        title:"AppPoolNetFxProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy/MsDeploySettings',
        title:"MsDeploySettings",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/WebServer60Provider',
        title:"WebServer60Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/CertProvider',
        title:"CertProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers/AuthenticationScheme',
        title:"AuthenticationScheme",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/DbMySqlProvider',
        title:"DbMySqlProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Parameters/BaseParameter',
        title:"BaseParameter",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Parameters/ParameterKind',
        title:"ParameterKind",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Directives/SkipAction',
        title:"SkipAction",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ComObject32Provider',
        title:"ComObject32Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/DbFullSqlProvider',
        title:"DbFullSqlProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ComObject64Provider',
        title:"ComObject64Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Rules/ReplacementRule',
        title:"ReplacementRule",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ContentPathLibProvider',
        title:"ContentPathLibProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppHostSchemaProvider',
        title:"AppHostSchemaProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/DbSqliteProvider',
        title:"DbSqliteProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Parameters/DeclareParameter',
        title:"DeclareParameter",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/CreateAppProvider',
        title:"CreateAppProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ArchiveDirProvider',
        title:"ArchiveDirProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/MetaKeyProvider',
        title:"MetaKeyProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AutoProvider',
        title:"AutoProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/ContentPathProvider',
        title:"ContentPathProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/UrlScanConfigProvider',
        title:"UrlScanConfigProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/IisAppProvider',
        title:"IisAppProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RootWebConfig64Provider',
        title:"RootWebConfig64Provider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppHostConfigProvider',
        title:"AppHostConfigProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RegValueProvider',
        title:"RegValueProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers/Direction',
        title:"Direction",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Parameters/IParameter',
        title:"IParameter",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/BackupManagerProvider',
        title:"BackupManagerProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/DacpacAction',
        title:"DacpacAction",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy/Operation',
        title:"Operation",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/PackageProvider',
        title:"PackageProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/SetAclProvider',
        title:"SetAclProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/GacInstallProvider',
        title:"GacInstallProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy/MsDeployRunner',
        title:"MsDeployRunner",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolPipelineMode',
        title:"AppPoolPipelineMode",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/DbDacFxProvider',
        title:"DbDacFxProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/CertStoreSettingsProvider',
        title:"CertStoreSettingsProvider",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/RecycleMode',
        title:"RecycleMode",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Parameters/SetParameter',
        title:"SetParameter",
        description:""
    });

    y({
        url:'/Cake.MsDeploy/Cake.MsDeploy/api/Cake.MsDeploy.Providers.MsDeployProviders/AppPoolPipelineProvider',
        title:"AppPoolPipelineProvider",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
