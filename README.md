The test process hangs when the Ryuk container is created by the test process. If the Ryuk container is already running the test process completes successfully.

This issue does not occur when using the `setupFiles` option in Vitest but those are ran for every test file, not globally for the whole test process like `globalSetup`.

Running with `TESTCONTAINERS_RYUK_DISABLED=true` also works as workaround.

## Expected behavior

The test process should complete successfully without hanging when being ran from a clean state.

## Reproduce failing case

```bash
npm ci
```

Run the tests from a clean state

```bash
npm t
```

The test process will hang

Wait for the all created containers, including Ryuk, to be removed and run the tests again

```bash
npm t
```

The test process will hang again

## Reproduce working case

```bash
npm ci
```

Run the tests from a clean state

```bash
npm t
```

The test process will hang

Run the test process again quickly before the Ryuk container is removed

```bash
npm t
```

The test process will complete successfully
