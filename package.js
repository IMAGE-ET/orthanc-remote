Package.describe({
  name: "lancelotsmith:orthanc-remote",
  summary: "Orthanc Remote",
  version: '0.0.1',
  git: "https://github.com/lancelotsmith/orthanc-remote.git"
});

Package.onUse(function (api) {
  api.use("http");

  api.addFiles('server/require.js', 'server');
  api.addFiles('server/namespace.js', 'server');
  api.addFiles('server/lib.js', 'server');

  api.export("OrthancRemote", 'server');
});
