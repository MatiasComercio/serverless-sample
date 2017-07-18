# Serverless Sample

This is a sample project that serves as an introduction to the Serverless Framework created for [this blog post](http://localhost).

## How to run the examples?
- [Install nvm](https://github.com/creationix/nvm#installation)
- Install node & npm: `nvm install` (it will use the version from the `.nvmrc` file)
- Install serverless: `npm install -g serverless`
- Install node dependencies: `npm install`

### Env variables files
Please refer to the following gists files and create the corresponding environmental files as they should not be uploaded to the repository!

### Go!
Now you should be able to run the example using the serverless commands.

Open a terminal, change directory to `services/service1` and then execute:

    sls invoke local --function function1 -p local_tests/event1.json

Then execute the following and look how the received event changes:

    sls invoke local --function function1 -p local_tests/event2.json

You can also change the `stage` to check how environmental variables are automatically selected by modifying the `provider.stage` field of the `serverless.yml` file inside the `services/service1` folder with the value `prod` (i.e. it should look like `stage: prod`). Once done this, run again any of the above examples.

Now, go to the `services/service2` directory and run the same steps so as to compare outputs.

## Now it's up to you!
Our introduction to the Serverless Framework has finished.
Please refer to its [documentation](https://serverless.com/framework/docs/) to dig deeper!
