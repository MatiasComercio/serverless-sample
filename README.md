# Serverless Sample

This is a sample project that serves as an introduction to the Serverless Framework created for [this blog post](https://medium.com/wolox-driving-innovation/a-serverless-way-to-serve-more-f8c47e1fd5b1).

## How to run the examples?
- [Install nvm](https://github.com/creationix/nvm#installation)
- Install node & npm: `nvm install` (it will use the version from the `.nvmrc` file)
- Install serverless: `npm install -g serverless`
- Install node dependencies: `npm install`

### Env variables files
Please refer to the following gists files and create the corresponding environmental files as they should not be uploaded to the repository!
- [global env variables](https://gist.github.com/MatiasComercio/e18d7316354636bff5fec80937c59e8a)
- [service1 env variables](https://gist.github.com/MatiasComercio/c419c8779799ec4e5f7dff2e8713b960)

### Go!
Now you should be able to run the example using the serverless commands.

Open a terminal, change directory to `services` and then execute:

    sls invoke local --function function1 -p service1/local_tests/event1.json

Then execute the following and look how the received event changes:

    sls invoke local --function function1 -p service1/local_tests/event2.json

You can also change the `stage` to check how environmental variables are automatically selected by modifying the `provider.stage` field of the `serverless.yml` file inside the `services` folder with the value `prod` (i.e. it should look like `stage: prod`). Once done this, run again any of the above examples.

Now, run the same commands as above but replacing `function1` with `function2` and `service1` with `service2` so as to compare outputs.

## Now it's up to you!
Our introduction to the Serverless Framework has finished.
Please refer to its [documentation](https://serverless.com/framework/docs/) to dig deeper!
