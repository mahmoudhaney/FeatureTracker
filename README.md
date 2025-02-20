# FeatureTracker App

## Overview

This application, built on the Frappe Framework, is tailored specifically manage the new features requests

## Installing App

1. Install the App to the bench from the Repository:

```
bench get-app --branch [branch-name] featuretracker git@github.com:mahmoudhaney/FeatureTracker.git
```

2. Install the App to the site:

```
bench --site [site-name] install-app featuretracker
```

3. Migrate the changes:

```
bench --site [site-name] migrate
```

4. Build the App:

```
bench --site [site-name] build
```

## Updating the App


1. Update the featuretracker App

```
bench update --reset --apps featuretracker
```

2. Migrate the changes:

```
bench --site [site-name] migrate
```

3. Build the App:

```
bench --site [site-name] build
```

## Uninstalling the App

1. Uninstall the App from the site:

```
bench --site [site-name] uninstall-app featuretracker
```

2. Remove the App from the bench:

```
bench remove-app featuretracker
```
