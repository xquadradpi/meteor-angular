import {ServiceConfiguration} from "meteor/service-configuration";

Meteor.startup(() => {
    ServiceConfiguration.configurations.remove({
        service: "google"
    });

    ServiceConfiguration.configurations.upsert(
        {service: "google"},
        {
            $set: {
                clientId: "641386969300-kci9c5k48jm16bmb7r0udqjfpcpufv29.apps.googleusercontent.com",
                secret: "G8FWepfnIHc6GYnbF0We0uur"
            }
        }
    );
});