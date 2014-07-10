Package.describe({
  summary: 'Display application errors to the user'
})

Package.on_use(function(api, where) {
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client')

  api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client')

  if (api.export) api.export('Errors')
})

Package.on_test(function(api) {
  api.use('bs-errors', 'client')
  api.use(['tinytest', 'test-helpers'], 'client')

  api.add_files('errors_tests.js', 'client')
})
