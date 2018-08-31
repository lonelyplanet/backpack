# Contributing

## Development

```
git clone https://github.com/lonelyplanet/backpack.git
cd packages/design-tokens
npm install
```

Please use an editor that supports [EditorConfig][editorconfig].

### Structuring commit messages

This package uses [standard-version][standard-version] generate a CHANGELOG automatically based on commit messages. In order for this to work, you must follow the [Conventional Commits specification][commits-spec] when writing commit message.

[commitlint][commitlint] is installed to lint commit messages and enforce the required formatting.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer]
```

The types of commits are:

* **fix**: A commit of the type `fix` patches a bug in your codebase (this correlates with `PATCH` in semantic versioning).
* **feat**: A commit of the type `feat` introduces a new feature to the codebase (this correlates with `MINOR` in semantic versioning).
* **BREAKING CHANGE**: A commit that has the text `BREAKING CHANGE`: at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A `BREAKING CHANGE` can be part of commits of any type.
* Other types can be used, such as `chore`, `docs`, `improvement` or `refactor`, but these types of commits will not be added to the CHANGELOG and have no implicit effect in semantic versioning unless they include a `BREAKING CHANGE`.

#### Examples

These examples follow the rules in the commitlint configuration.

**Commit message with description and breaking change in body**

```
feat: Allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files`
```

**Commit message with no body**

```
docs: Correct spelling of CHANGELOG
```

**Commit message with scope**

```
feat(lang): Add polish language
```

**Commit message for a fix using an (optional) issue number**

```
fix: Fix minor typos in code

See the issue for details on the typos fixed

Fixes #12
```

And lastly, when writing commit messages, keep in mind [the seven rules of a great Git commit message][seven-rules].

### Merging a pull request

From the [standard-version docs][standard-version-docs]:

> We recommend keeping the scope of each PR to one general feature or fix. In practice, this allows you to use unstructured commit messages when committing each little change and then squash them into a single commit with a structured message (referencing the PR number) once they have been reviewed and accepted.

If you’re a Lonely Planet team member, you can merge your own pull requests.

In Github, there two ways in which you should merge a pull request; “Create a merge commit” and “Squash and merge”.

Ideally, there should be only one feature per pull request, but sometimes this isn’t always the case.

When there is only one feature being merged, always use the “Squash and merge” option. If there are multiple commits related to the same single feature, then we want to merge these commits into a single commit in an attempt to keep the commit log clean.

If you have multiple fixes or features in a single pull request and each commit uses a [structured message][structured-message], then you should do a standard merge with the “Create a merge commit” option. This will preserve the commit history from your branch after the merge and allow the CHANGELOG to be created accordingly. Squashing the commits in this instance should not be considered.

## Release guide

Currently, releases can be made by [thomasthesecond][thomasthesecond].

[editorconfig]: http://editorconfig.org/
[standard-version]: https://github.com/conventional-changelog/standard-version
[commits-spec]: https://conventionalcommits.org/
[commitlint]: https://github.com/marionebl/commitlint
[structured-message]: #structuring-commit-messages
[seven-rules]: https://chris.beams.io/posts/git-commit/#seven-rules
[standard-version-docs]: https://github.com/conventional-changelog/standard-version#should-i-always-squash-commits-when-merging-prs
[thomasthesecond]: https://github.com/thomasthesecond
