export const API_DATA = [
  {
    sha: "d1afcb43fd506297109c32ff462f6f659f9110ae",
    node_id:
      "C_kwDOAJy2KtoAKGQxYWZjYjQzZmQ1MDYyOTcxMDljMzJmZjQ2MmY2ZjY1OWY5MTEwYWU",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-09-03T21:28:05Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-09-03T21:28:05Z",
      },
      message:
        "[DevTools] Track all public HostInstances in a Map (#30831)\n\nThis lets us get from a HostInstance to the nearest DevToolsInstance\r\nwithout relying on `findFiberByHostInstance` and\r\n`fiberToDevToolsInstanceMap`. We already did the equivalent of this for\r\nResources in HostHoistables.\r\n\r\nOne issue before was that we'd ideally get away from the\r\n`fiberToDevToolsInstanceMap` map in general since we should ideally not\r\ntreat Fibers as stateful but they could be replaced by something else\r\nstateful in principle.\r\n\r\nThis PR also addresses Virtual Instances. Now you can select a DOM node\r\nand have it select a Virtual Instance if that's the nearest parent since\r\nthe parent doesn't have to be a Fiber anymore.\r\n\r\nHowever, the other reason for this change is that I'd like to get rid of\r\nthe need for the `findFiberByHostInstance` from being injected. A\r\nrenderer should not need to store a reference back from its instance to\r\na Fiber. Without the Synthetic Event system this wouldn't be needed by\r\nthe renderer so we should be able to remove it. We also don't really\r\nneed it since we have all the information by just walking the commit to\r\ncollect the nodes if we just maintain our own Map.\r\n\r\nThere's one subtle nuance that the different renderers do. Typically a\r\nHostInstance is the same thing as a PublicInstance in React but\r\ntechnically in Fabric they're not the same. So we need to translate\r\nbetween PublicInstance and HostInstance. I just hardcoded the Fabric\r\nimplementation of this since it's the only known one that does this but\r\ncould feature detect other ones too if necessary. On one hand it's more\r\nresilient to refactors to not rely on injected helpers and on hand it\r\ndoesn't follow changes to things like this.\r\n\r\nFor the conflict resolution I added in #30494 I had to make that\r\nspecific to DOM so we can move the DOM traversal to the backend instead\r\nof the injected helper.",
      tree: {
        sha: "17d30a3138fb9ace8c614c26bf800ee3d8dee61a",
        url: "https://api.github.com/repos/facebook/react/git/trees/17d30a3138fb9ace8c614c26bf800ee3d8dee61a",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/d1afcb43fd506297109c32ff462f6f659f9110ae",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm139lCRC1aQ7uu5UhlAAAIpcQAERq208gQdb1vkfmfq27SIKL\n99/nefAdTXl44bNXv8v7PrmJqr7olQoW4uJBwbKgKCNfuHuny0Vn+NozTqABRlkS\nHJQG5JG32guBLqvJ5YElmTtDnx+4ubSbdsAVOxlG86CQNxYjAvlAGb2SilDbRX8e\nnptDLe3QZrwxKcSNTTv5Ra8nAf3c6nqGcq7TPZ5iDEwCjTeir331PjUmS/9f7DsG\nqKaLEebJ+syD60x06nKeZSeKGizJE8eEh9aZkVRvSwlBnXe3ykpb3y+IgWLRUCCm\nDEyS6NnRVGNjo4M4oRphr/jDeo5RKUGmbkk4ALDOJVmXh7vFk7238MRuxvCaaOl1\nZraL1mCPJ6aMpfdyqONjxbx6TQM2UcxYSUUGLcSg1xbfO5BjK35GA1iw7FBuwA/Y\n8SQAqoQ4FstOoxqyAb5/uy29BpNCSbdX2C+JLoU7XqtEoz7NhpdakzdOcToGyudn\nNZTo+ePoonBkODnhgkU/9kQoBse5p0UTNcyuPSjKkto/90CnP2s5RQtScOvu3L5/\n+GMvJdRM3fJbAC2XLFNASWFPYGMvqu63iARE9+Cly4BssmfCmVl0d8POvx6M/V7Z\ndjMyxS9763PfP167uuO02StA8FItz3afPlIp2MATc6GPi0DcT8BA6yOSRfyzjLEi\n49snH5MdPHsQV8wz2pRF\n=uEL+\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 17d30a3138fb9ace8c614c26bf800ee3d8dee61a\nparent 8d68da3f7396064614f34b84881fe8833b6039ac\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1725398885 -0400\ncommitter GitHub <noreply@github.com> 1725398885 -0400\n\n[DevTools] Track all public HostInstances in a Map (#30831)\n\nThis lets us get from a HostInstance to the nearest DevToolsInstance\r\nwithout relying on `findFiberByHostInstance` and\r\n`fiberToDevToolsInstanceMap`. We already did the equivalent of this for\r\nResources in HostHoistables.\r\n\r\nOne issue before was that we'd ideally get away from the\r\n`fiberToDevToolsInstanceMap` map in general since we should ideally not\r\ntreat Fibers as stateful but they could be replaced by something else\r\nstateful in principle.\r\n\r\nThis PR also addresses Virtual Instances. Now you can select a DOM node\r\nand have it select a Virtual Instance if that's the nearest parent since\r\nthe parent doesn't have to be a Fiber anymore.\r\n\r\nHowever, the other reason for this change is that I'd like to get rid of\r\nthe need for the `findFiberByHostInstance` from being injected. A\r\nrenderer should not need to store a reference back from its instance to\r\na Fiber. Without the Synthetic Event system this wouldn't be needed by\r\nthe renderer so we should be able to remove it. We also don't really\r\nneed it since we have all the information by just walking the commit to\r\ncollect the nodes if we just maintain our own Map.\r\n\r\nThere's one subtle nuance that the different renderers do. Typically a\r\nHostInstance is the same thing as a PublicInstance in React but\r\ntechnically in Fabric they're not the same. So we need to translate\r\nbetween PublicInstance and HostInstance. I just hardcoded the Fabric\r\nimplementation of this since it's the only known one that does this but\r\ncould feature detect other ones too if necessary. On one hand it's more\r\nresilient to refactors to not rely on injected helpers and on hand it\r\ndoesn't follow changes to things like this.\r\n\r\nFor the conflict resolution I added in #30494 I had to make that\r\nspecific to DOM so we can move the DOM traversal to the backend instead\r\nof the injected helper.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/d1afcb43fd506297109c32ff462f6f659f9110ae",
    html_url:
      "https://github.com/facebook/react/commit/d1afcb43fd506297109c32ff462f6f659f9110ae",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/d1afcb43fd506297109c32ff462f6f659f9110ae/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "8d68da3f7396064614f34b84881fe8833b6039ac",
        url: "https://api.github.com/repos/facebook/react/commits/8d68da3f7396064614f34b84881fe8833b6039ac",
        html_url:
          "https://github.com/facebook/react/commit/8d68da3f7396064614f34b84881fe8833b6039ac",
      },
    ],
  },
  {
    sha: "8d68da3f7396064614f34b84881fe8833b6039ac",
    node_id:
      "C_kwDOAJy2KtoAKDhkNjhkYTNmNzM5NjA2NDYxNGYzNGI4NDg4MWZlODgzM2I2MDM5YWM",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-09-03T20:04:24Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-09-03T20:04:24Z",
      },
      message:
        "[Fiber] Stash ThenableState on the Dependencies Object for Use By DevTools (#30866)\n\nThis lets us track what a Component might suspend on from DevTools. We\r\ncould already collect this by replaying a component's Hooks but that\r\nwould be expensive to collect from a whole tree.\r\n\r\nThe thenables themselves might contain useful information but mainly\r\nwe'd want access to the `_debugInfo` on the thenables which might\r\ncontain additional information from the server.\r\n\r\n\r\nhttps://github.com/facebook/react/blob/19bd26beb689e554fceb0b929dc5199be8cba594/packages/shared/ReactTypes.js#L114\r\n\r\nIn a follow up we should really do something similar in Flight to\r\ntransfer `use()` on the debugInfo of that Server Component.",
      tree: {
        sha: "6ca09cdc95ea3d42eeb9e505ab1a37b27445eeaf",
        url: "https://api.github.com/repos/facebook/react/git/trees/6ca09cdc95ea3d42eeb9e505ab1a37b27445eeaf",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/8d68da3f7396064614f34b84881fe8833b6039ac",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm12vICRC1aQ7uu5UhlAAAvk4QAIPBCQceaPpgHeBXhPTlb6bV\nUTAEqC8NEo9xeGbzhlrGaObhu2oH0aqw0WIvPE6+/rrzOw7ZExqNiPMoUO/lD9Qe\nENaBLKFIUOKQAtONbBIBbOrz0D1sCHQgxj25ooJ1l0KbHZ/7pGPPXYdFdkM2fsTz\nRn3LZebSPBY2cj5riIvmL0YaRTqEvtWWTfL0DOKOqmoOZUEeazHadPEW2OTBNCKa\noj8JMWpvclRsNDe5tF7CuwS8GdHMg271S4X+sOgKtzDY4aM/L/DeGbg8LD5UpLRW\nZumdEWeSv9RKGsIU+tVPKW9f0lJ8x3ofkKEttUfYgFF2NX9Wizj8sbeZ7pSJnkBw\nvyKoc/2yCGrCHL78xP4j0/NtaaZQKu5MEyQ0/Ubr1wynaPwlbDY5T6Qtlvm4DQqJ\nzRtgJN/OM2VIwG5DqR6HI/2bf+CGBzyoMxbkrm8xVUUk72HhUOKtceuNd9msvUlx\nUJVF3OAuqCQEks+WdhOYcl7YfrGdQVsJPk8RdzBBjNFWQm9LDwVCWnn6qzI5Z9LD\nJ8Nw5wK86JoVmUzRuyAA6flqLhp3e0XKPGztMOKtmTaklbRol3WXff09dp8Fckg1\n+suseW/P82sqgPKhnzyQNaTGR+RKUnE9K01MFJIE+F+FzaMWf+xEUdHZHujrUJ3S\nP6/t3+hmbbfVYDWVg0dw\n=gX57\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 6ca09cdc95ea3d42eeb9e505ab1a37b27445eeaf\nparent e0a07e9738b2ec2ea5cf4872406b465d677bfe2c\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1725393864 -0400\ncommitter GitHub <noreply@github.com> 1725393864 -0400\n\n[Fiber] Stash ThenableState on the Dependencies Object for Use By DevTools (#30866)\n\nThis lets us track what a Component might suspend on from DevTools. We\r\ncould already collect this by replaying a component's Hooks but that\r\nwould be expensive to collect from a whole tree.\r\n\r\nThe thenables themselves might contain useful information but mainly\r\nwe'd want access to the `_debugInfo` on the thenables which might\r\ncontain additional information from the server.\r\n\r\n\r\nhttps://github.com/facebook/react/blob/19bd26beb689e554fceb0b929dc5199be8cba594/packages/shared/ReactTypes.js#L114\r\n\r\nIn a follow up we should really do something similar in Flight to\r\ntransfer `use()` on the debugInfo of that Server Component.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/8d68da3f7396064614f34b84881fe8833b6039ac",
    html_url:
      "https://github.com/facebook/react/commit/8d68da3f7396064614f34b84881fe8833b6039ac",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/8d68da3f7396064614f34b84881fe8833b6039ac/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
        url: "https://api.github.com/repos/facebook/react/commits/e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
        html_url:
          "https://github.com/facebook/react/commit/e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
      },
    ],
  },
  {
    sha: "e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
    node_id:
      "C_kwDOAJy2KtoAKGUwYTA3ZTk3MzhiMmVjMmVhNWNmNDg3MjQwNmI0NjVkNjc3YmZlMmM",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-09-03T16:29:59Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-09-03T16:29:59Z",
      },
      message:
        '[DevTools] Support VirtualInstances in findAllCurrentHostInstances (#30853)\n\nThis lets us highlight Server Components.\r\n\r\nHowever, there is a problem with this because if the actual nearest\r\nFiber is filtered, there\'s no FiberInstance and so we might skip past it\r\nand maybe never find a child while walking the whole tree. This is very\r\ncommon in the case where you have just Server Components and Host\r\nComponents which are filtered by default.\r\n\r\nNote how the DOM nodes that are just plain host instances without client\r\ncomponent wrappers are not highlighted here:\r\n\r\n<img width="1102" alt="Screenshot 2024-08-30 at 4 33 55 PM"\r\nsrc="https://github.com/user-attachments/assets/c9a7b91e-5faf-4c60-99a8-1195539ff8b5">\r\n\r\nFixing that needs a separate refactor though and related to several\r\nother features that already have a similar issue without\r\nVirtualInstances like Suspense/Error Boundaries (triggering\r\nsuspense/error on a filtered Suspense/ErrorBoundary doesn\'t work\r\ncorrectly). So this first PR just adds the feature for the common case\r\nwhere there\'s at least some Fibers.',
      tree: {
        sha: "34e2768e4948c0cbdf2b8b2e7f37043d354a313a",
        url: "https://api.github.com/repos/facebook/react/git/trees/34e2768e4948c0cbdf2b8b2e7f37043d354a313a",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm1zmHCRC1aQ7uu5UhlAAArf4QAGee5/ylNYXdgyErgw935MI+\nIhOd0EgUyeTfGT41W0V5lMibXn2S1mMRu0m9BbW1C7zPLooNwyqgiATuw9zaV8d1\n7G4FeF9gXXdrFBh74K9LcmD9Ho7j3frtKJot9m5ojW+PwXspHWgAaPHZuRTQm1Lw\n4zFHyqwm5ZCwY/BAcl85HJrncKADu9MOjT9hbDvYkNpeIZWaXIkGowxTjNGULoQ2\nRZbHCPkODYhUOt3rkAO9IiW5udE/6VC327236h3L98QO+exkMY+YuQmH80Y4P5xG\nGSjerGbJnC175wed8TBzpGogVFJgUHnv/wqFylwV75EBFXGsqJdb6xd5OYGBdiRu\nOenKH+jPG1aeKzgZTpuurX2BnrOky2Ic3nUgnFmyVVk9Fyvlcab/VAtLeapX5KSd\nVKTIAbN9SsWkBq+a9YPPh8ggHVHHWKcncSqIIPsrcx6YtKKaUtcVZxMcdfpV4Js4\ntwHzhOBh4eHdmiA9/8YCAlSmzfFMA9L3wXlNazb8OVpSR8s/pjhqqYehPH3Ab8Li\nO3x/8Zu+FREQ7UnkyonPnefZq2CNhP0ntsnugooRp41B7mvI/HX5BjqHc9WhMvvK\ny8ZqrNgWy6xkSAWULbzT03RSzYzIcl5joV2p7Rzdp9Gz7qgSmi05gRrWFoQDQY65\n8FXCsA7pmBOruncxsnG4\n=fuh2\n-----END PGP SIGNATURE-----\n",
        payload:
          'tree 34e2768e4948c0cbdf2b8b2e7f37043d354a313a\nparent 04ec50efa941a7f07e8231a87e72d6d851948b8c\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1725380999 -0400\ncommitter GitHub <noreply@github.com> 1725380999 -0400\n\n[DevTools] Support VirtualInstances in findAllCurrentHostInstances (#30853)\n\nThis lets us highlight Server Components.\r\n\r\nHowever, there is a problem with this because if the actual nearest\r\nFiber is filtered, there\'s no FiberInstance and so we might skip past it\r\nand maybe never find a child while walking the whole tree. This is very\r\ncommon in the case where you have just Server Components and Host\r\nComponents which are filtered by default.\r\n\r\nNote how the DOM nodes that are just plain host instances without client\r\ncomponent wrappers are not highlighted here:\r\n\r\n<img width="1102" alt="Screenshot 2024-08-30 at 4 33 55 PM"\r\nsrc="https://github.com/user-attachments/assets/c9a7b91e-5faf-4c60-99a8-1195539ff8b5">\r\n\r\nFixing that needs a separate refactor though and related to several\r\nother features that already have a similar issue without\r\nVirtualInstances like Suspense/Error Boundaries (triggering\r\nsuspense/error on a filtered Suspense/ErrorBoundary doesn\'t work\r\ncorrectly). So this first PR just adds the feature for the common case\r\nwhere there\'s at least some Fibers.',
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
    html_url:
      "https://github.com/facebook/react/commit/e0a07e9738b2ec2ea5cf4872406b465d677bfe2c",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/e0a07e9738b2ec2ea5cf4872406b465d677bfe2c/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "04ec50efa941a7f07e8231a87e72d6d851948b8c",
        url: "https://api.github.com/repos/facebook/react/commits/04ec50efa941a7f07e8231a87e72d6d851948b8c",
        html_url:
          "https://github.com/facebook/react/commit/04ec50efa941a7f07e8231a87e72d6d851948b8c",
      },
    ],
  },
  {
    sha: "04ec50efa941a7f07e8231a87e72d6d851948b8c",
    node_id:
      "C_kwDOAJy2KtoAKDA0ZWM1MGVmYTk0MWE3ZjA3ZTgyMzFhODdlNzJkNmQ4NTE5NDhiOGM",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-09-03T16:29:15Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-09-03T16:29:15Z",
      },
      message:
        '[DevTools] Add Filtering of Environment Names (#30850)\n\nStacked on #30842.\r\n\r\nThis adds a filter to be able to exclude Components from a certain\r\nenvironment. Default to Client or Server.\r\n\r\nThe available options are computed into a dropdown based on the names\r\nthat are currently used on the page (or an option that were previously\r\nused). In addition to the hardcoded "Client". Meaning that if you have\r\nServer Components on the page you see "Server" or "Client" as possible\r\noptions but it can be anything if there are multiple RSC environments on\r\nthe page.\r\n\r\n"Client" in this case means Function and Class Components in Fiber -\r\nexcluding built-ins.\r\n\r\nIf a Server Component has two environments (primary and secondary) then\r\nboth have to be filtered to exclude it.\r\n\r\nWe don\'t show the option at all if there are no Server Components used\r\nin the page to avoid confusing existing users that are just using Client\r\nComponents and wouldn\'t know the difference between Server vs Client.\r\n\r\n<img width="815" alt="Screenshot 2024-08-30 at 12 56 42 AM"\r\nsrc="https://github.com/user-attachments/assets/e06b225a-e85d-4cdc-8707-d4630fede19e">',
      tree: {
        sha: "1dbf30be289a3b5234697b84bf048e63f5a5de00",
        url: "https://api.github.com/repos/facebook/react/git/trees/1dbf30be289a3b5234697b84bf048e63f5a5de00",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/04ec50efa941a7f07e8231a87e72d6d851948b8c",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm1zlbCRC1aQ7uu5UhlAAAxXMQAJlHCxyl5ioY813lp6Cs9y2D\nvhr90vZSaIXPewpByX1n8Vh3GUeSN1r34mksb9xmc5dUZPvJUE3Z4vh4RQgGBNgF\nZBUpHCqTaY+qYHLCa92a0xUpCMFMZdokJKHq0zYepCwsuQt+p5JGRtA+jeO52Urd\nWB3aB78EEqeLTv120DDmMJzlGYQpbupK6GvXGf2BSw+EjIvBqvMiiJu/Zd2R2aEu\nFpSH1QjcbRMa8itsYVTFYxW+6pf92pwZY0yb69UJkoKUgWbyFUZEeJEbgHSWRJ76\n1lgp3HMmx/7dIJ8RMnvroarUVFc0s0ws6eaOL0wCkm/rvXX8A5QWhIlrliFuKKgU\nSQ4VKradWk9nqbWnHoTSMa1y5xfyXKGmSIWzXsGRbNMzI7Ojjj8Asuwmk9NMSogH\n3MkgaQLXLFc0bf8Wx8sZwiTCfSVLaiD4BOoeDG+BKHE0VCbhtkODovvqy9zJsa5P\ngIFNEYCmKb/7c0uzbwCHXRmq1lhLuLrLUJzjRJERDQnscHvca4/Uot65ifbd7aFr\nYhh1J5oeNL9lnFd7DE5mEbzEA/fcyiaYd1cH0ZQsD07su2nsQbYccoiBD3sOvjk/\nIh6k4ms0eP6BbTRoOLcVEJliRzFmKdPet89r08Hl6r+mJIkyRxbYxNMo42IqGmwb\nLip1WeP7bk6ei6uKrFId\n=1fOZ\n-----END PGP SIGNATURE-----\n",
        payload:
          'tree 1dbf30be289a3b5234697b84bf048e63f5a5de00\nparent 4f604941569d2e8947ce1460a0b2997e835f37b9\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1725380955 -0400\ncommitter GitHub <noreply@github.com> 1725380955 -0400\n\n[DevTools] Add Filtering of Environment Names (#30850)\n\nStacked on #30842.\r\n\r\nThis adds a filter to be able to exclude Components from a certain\r\nenvironment. Default to Client or Server.\r\n\r\nThe available options are computed into a dropdown based on the names\r\nthat are currently used on the page (or an option that were previously\r\nused). In addition to the hardcoded "Client". Meaning that if you have\r\nServer Components on the page you see "Server" or "Client" as possible\r\noptions but it can be anything if there are multiple RSC environments on\r\nthe page.\r\n\r\n"Client" in this case means Function and Class Components in Fiber -\r\nexcluding built-ins.\r\n\r\nIf a Server Component has two environments (primary and secondary) then\r\nboth have to be filtered to exclude it.\r\n\r\nWe don\'t show the option at all if there are no Server Components used\r\nin the page to avoid confusing existing users that are just using Client\r\nComponents and wouldn\'t know the difference between Server vs Client.\r\n\r\n<img width="815" alt="Screenshot 2024-08-30 at 12 56 42 AM"\r\nsrc="https://github.com/user-attachments/assets/e06b225a-e85d-4cdc-8707-d4630fede19e">',
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/04ec50efa941a7f07e8231a87e72d6d851948b8c",
    html_url:
      "https://github.com/facebook/react/commit/04ec50efa941a7f07e8231a87e72d6d851948b8c",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/04ec50efa941a7f07e8231a87e72d6d851948b8c/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "4f604941569d2e8947ce1460a0b2997e835f37b9",
        url: "https://api.github.com/repos/facebook/react/commits/4f604941569d2e8947ce1460a0b2997e835f37b9",
        html_url:
          "https://github.com/facebook/react/commit/4f604941569d2e8947ce1460a0b2997e835f37b9",
      },
    ],
  },
  {
    sha: "4f604941569d2e8947ce1460a0b2997e835f37b9",
    node_id:
      "C_kwDOAJy2KtoAKDRmNjA0OTQxNTY5ZDJlODk0N2NlMTQ2MGEwYjI5OTdlODM1ZjM3Yjk",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-30T19:11:57Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-30T19:11:57Z",
      },
      message:
        "[Flight] Ship DEV-only enableServerComponentLogs flag in Stable/Canary (#30847)\n\nTo recap. This only affects DEV and RSC. It patches console on the\r\nserver in DEV (similar to how React DevTools already does and what we\r\ndid for the double logging). Then replays those logs with a `[Server]`\r\nbadge on the client so you don't need a server terminal open.\r\n\r\nThis has been on for over 6 months now in our experimental channel and\r\nwe've had a lot of coverage in Next.js due to various experimental flags\r\nlike taint and ppr.\r\n\r\nIt's non-invasive in that even if something throws we just serialize\r\nthat as an unknown value.\r\n\r\nThe main feedback we've gotten was:\r\n\r\n- The serialization depth wasn't deep enough which I addressed in #30294\r\nand haven't really had any issues since. This could still be an issue or\r\nthe inverse that you serialize too many logs that are also too deep.\r\nThis is not so much an issue with intentional logging and things like\r\naccidental errors don't typically have unbounded arguments (e.g. React\r\nerrors are always string arguments). The ideal would be some way to\r\nretain objects and then load them on-demand but that needs more\r\nplumbing. Which can be later.\r\n- The other was that double logging on the server is annoying if the\r\nsame terminal does both the RSC render and SSR render which was\r\naddressed in #30207. It is now off by default in node/edge-builds of the\r\nclient, on by default in browser builds. With the `replayConsole` option\r\nto either opt-in or out.\r\n\r\nWe've reached a good spot now I think.\r\n\r\nThese are better with `enableOwnerStacks` but that's a separate track\r\nand not needed.\r\n\r\nThe only thing to document here, other than maybe that we're doing it,\r\nis the `replayConsole` option but that's part of the RSC renderers that\r\nthemselves are not documented so nowhere to document it.",
      tree: {
        sha: "1b30ef17f7d28155991e516bb7d717848131485c",
        url: "https://api.github.com/repos/facebook/react/git/trees/1b30ef17f7d28155991e516bb7d717848131485c",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/4f604941569d2e8947ce1460a0b2997e835f37b9",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0hl9CRC1aQ7uu5UhlAAAHs4QAKpm/dTI157SzTdtXwBu99F/\nh4j8etsO35teS607YgUHUi6Zd7Gi3jMUKFxodWXS02s24njwUKqvgSOHRuULbTcV\nQSMl2eme/gb7nh9uMbDQ7D4lnoozN6eSI/i1SM992FKQhTSKLpWljTNt61G66zQP\nBB+s0VJzwF+lHPiA+adOpQUBpsLrAiEliNpXxUf7Ipp0zmu/2HMY2w8OAQdoN7T8\nnBc6QJwmv7297H6X8NhBAzQ98DCizFxjAfu4gZip5GDx9j7PqbIY5t0DpNGLBd4N\nFXjGyCAVgEhK3sVAXY2mGHK8eKMu48KtB8RTgPvUqbSrVld8wRZAe5Gl11h5KtSP\ntlZbSttNZYEE+gBzjxkk51j7MR87gA4MfizMQi0jQ8kvPm2rV5R9WfoSxVwq5/PP\nej3UiJdi5AAo1G0ZQfPKamJHJqY0e0LpVYCixjcrNnHXVu00sYmPuP8MUpUUXi5b\nzq6totEjCsb/szqCy8c6PpOTAnyiZ3oTVmkzlRnlV5cgP4+yPe4xgtrGgAzfossr\nao9RrDrBSY+kxqDSopXkWdoiB5sE/O184qEjjvxE1sF0BkRBEmKnq2ySdJGcevhc\nToOES7Q10nVw3ZX8yH6eNY7UX1X+jFCyIxc6tc7QNty2etqIVlwcXrLlqkFCTWe/\nuFpfoOKky5el34r8Vy0d\n=JwpC\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 1b30ef17f7d28155991e516bb7d717848131485c\nparent e56f4ae38d118168e0561f1b86ecbdef592138e4\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1725045117 -0400\ncommitter GitHub <noreply@github.com> 1725045117 -0400\n\n[Flight] Ship DEV-only enableServerComponentLogs flag in Stable/Canary (#30847)\n\nTo recap. This only affects DEV and RSC. It patches console on the\r\nserver in DEV (similar to how React DevTools already does and what we\r\ndid for the double logging). Then replays those logs with a `[Server]`\r\nbadge on the client so you don't need a server terminal open.\r\n\r\nThis has been on for over 6 months now in our experimental channel and\r\nwe've had a lot of coverage in Next.js due to various experimental flags\r\nlike taint and ppr.\r\n\r\nIt's non-invasive in that even if something throws we just serialize\r\nthat as an unknown value.\r\n\r\nThe main feedback we've gotten was:\r\n\r\n- The serialization depth wasn't deep enough which I addressed in #30294\r\nand haven't really had any issues since. This could still be an issue or\r\nthe inverse that you serialize too many logs that are also too deep.\r\nThis is not so much an issue with intentional logging and things like\r\naccidental errors don't typically have unbounded arguments (e.g. React\r\nerrors are always string arguments). The ideal would be some way to\r\nretain objects and then load them on-demand but that needs more\r\nplumbing. Which can be later.\r\n- The other was that double logging on the server is annoying if the\r\nsame terminal does both the RSC render and SSR render which was\r\naddressed in #30207. It is now off by default in node/edge-builds of the\r\nclient, on by default in browser builds. With the `replayConsole` option\r\nto either opt-in or out.\r\n\r\nWe've reached a good spot now I think.\r\n\r\nThese are better with `enableOwnerStacks` but that's a separate track\r\nand not needed.\r\n\r\nThe only thing to document here, other than maybe that we're doing it,\r\nis the `replayConsole` option but that's part of the RSC renderers that\r\nthemselves are not documented so nowhere to document it.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/4f604941569d2e8947ce1460a0b2997e835f37b9",
    html_url:
      "https://github.com/facebook/react/commit/4f604941569d2e8947ce1460a0b2997e835f37b9",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/4f604941569d2e8947ce1460a0b2997e835f37b9/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "e56f4ae38d118168e0561f1b86ecbdef592138e4",
        url: "https://api.github.com/repos/facebook/react/commits/e56f4ae38d118168e0561f1b86ecbdef592138e4",
        html_url:
          "https://github.com/facebook/react/commit/e56f4ae38d118168e0561f1b86ecbdef592138e4",
      },
    ],
  },
  {
    sha: "e56f4ae38d118168e0561f1b86ecbdef592138e4",
    node_id:
      "C_kwDOAJy2KtoAKGU1NmY0YWUzOGQxMTgxNjhlMDU2MWYxYjg2ZWNiZGVmNTkyMTM4ZTQ",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-30T14:05:19Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-30T14:05:19Z",
      },
      message:
        '[DevTools] Support secondary environment name when it changes (#30842)\n\nWe currently support the Environment Name change within a Component.\r\n#29867\r\n\r\nIf this happens, we give it two HoCs. The problem with this is that we\r\nonly show one followed by `+1` in the list.\r\n\r\nBefore:\r\n<img width="529" alt="Screenshot 2024-08-28 at 6 50 31 PM"\r\nsrc="https://github.com/user-attachments/assets/c080be72-c254-4d4d-89b6-d1b7f9a9ada8">\r\n\r\nAfter:\r\n<img width="1101" alt="Screenshot 2024-08-28 at 7 16 21 PM"\r\nsrc="https://github.com/user-attachments/assets/04718674-164b-4255-9cf6-dec9198f12b7">\r\n\r\nI could potentially instead badge this case as `A/B` in a single badge.',
      tree: {
        sha: "4cb64627969633d3938429ef821c70e07a91d2a5",
        url: "https://api.github.com/repos/facebook/react/git/trees/4cb64627969633d3938429ef821c70e07a91d2a5",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/e56f4ae38d118168e0561f1b86ecbdef592138e4",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0dGfCRC1aQ7uu5UhlAAArDMQAAiewhQ3zorl2noz4SbUQ8vN\n7MtqbXNW3cHFiwFNP8OwHMPnjjiws6UjpYwiubFShdaeZudfZcXAcrkh+kn1L6sq\nogIss8GWJxNlUQs0/2oPqJg+Si9I7DZkcHdrOhHNMVbb0Bcm9WznYZyKH1nY3+Hs\ncH/bKLgWdHOm7NyjzKgYMYH4If03IwytD2+BmT6GnPohGs1oqZ4VEL/YHMorWIWr\nxc5kOUn8KSzqsEjL1b8YEt1Mvlrr43kQ0XeZl9Rf46bH/P4gztqK7e0WWkQGxmsz\ngpM9o1uuIZsi5/WGL2fjmqz952v2/BBod3RfeqDGRN9sMsA8JKpPUrGHrFQHdVJ0\nhHAspb3fAuneMAoXX2QtHTxjOVP1HXnunGBQlLN5K6y8JYcP02ekX1+ZYqY+aQHr\nxzuORfW+epsc2nj8syOxT22Mt12/JWdrBE8AnRZ9ShRZZ9/yzqthQhZOhZwmBlw8\nbgGP0D/gS/SoNuupPQsM3q8ov8Gd/VRn/sWa1iHr7vC7BD9W/4aS2XguWd1OgXp4\n91ApvxgIyXSAetG6SjsP9RWpZSEYTxBvn+L825rVco/JJSMMUFsimnnr1oniwZlD\noR547kagT0a4XdX0wVwL3h9OKAhNkunw2R9L1sVIi1lWES2zMYBpJrREA+lLU8d3\nJ8gJpj8OgtpeHOGVX7hO\n=RgRT\n-----END PGP SIGNATURE-----\n",
        payload:
          'tree 4cb64627969633d3938429ef821c70e07a91d2a5\nparent 8308d2f1fe90ec0b5a5cde147b97c6e78581710a\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1725026719 -0400\ncommitter GitHub <noreply@github.com> 1725026719 -0400\n\n[DevTools] Support secondary environment name when it changes (#30842)\n\nWe currently support the Environment Name change within a Component.\r\n#29867\r\n\r\nIf this happens, we give it two HoCs. The problem with this is that we\r\nonly show one followed by `+1` in the list.\r\n\r\nBefore:\r\n<img width="529" alt="Screenshot 2024-08-28 at 6 50 31 PM"\r\nsrc="https://github.com/user-attachments/assets/c080be72-c254-4d4d-89b6-d1b7f9a9ada8">\r\n\r\nAfter:\r\n<img width="1101" alt="Screenshot 2024-08-28 at 7 16 21 PM"\r\nsrc="https://github.com/user-attachments/assets/04718674-164b-4255-9cf6-dec9198f12b7">\r\n\r\nI could potentially instead badge this case as `A/B` in a single badge.',
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/e56f4ae38d118168e0561f1b86ecbdef592138e4",
    html_url:
      "https://github.com/facebook/react/commit/e56f4ae38d118168e0561f1b86ecbdef592138e4",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/e56f4ae38d118168e0561f1b86ecbdef592138e4/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
        url: "https://api.github.com/repos/facebook/react/commits/8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
        html_url:
          "https://github.com/facebook/react/commit/8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
      },
    ],
  },
  {
    sha: "8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
    node_id:
      "C_kwDOAJy2KtoAKDgzMDhkMmYxZmU5MGVjMGI1YTVjZGUxNDdiOTdjNmU3ODU4MTcxMGE",
    commit: {
      author: {
        name: "Ruslan Lesiutin",
        email: "rdlesyutin@gmail.com",
        date: "2024-08-30T09:34:52Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-30T09:34:52Z",
      },
      message:
        "fix[react-devtools/ReactDebugHooks]: support unstable prefixes in hooks and useContextWithBailout (#30837)\n\nRelated - https://github.com/facebook/react/pull/30407.\r\n\r\nThis is experimental-only and FB-only hook. Without these changes,\r\ninspecting an element that is using this hook will throw an error,\r\nbecause this hook is missing in Dispatcher implementation from React\r\nDevTools, which overrides the original one to build the hook tree.\r\n\r\n![Screenshot 2024-08-28 at 18 42\r\n55](https://github.com/user-attachments/assets/e3bccb92-74fb-4e4a-8181-03d13f8512c0)\r\n\r\nOne nice thing from it is that in case of any potential regressions\r\nrelated to this experiment, we can quickly triage which implementation\r\nof `useContext` is used by inspecting an element in React DevTools.\r\n\r\nIdeally, I should've added some component that is using this hook to\r\n`react-devtools-shell`, so it can be manually tested, but I can't do it\r\nwithout rewriting the infra for it. This is because this hook is only\r\navailable from fb-www builds, and not experimental.",
      tree: {
        sha: "36bfe515235e08650a348f140da244abb4708033",
        url: "https://api.github.com/repos/facebook/react/git/trees/36bfe515235e08650a348f140da244abb4708033",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0ZI8CRC1aQ7uu5UhlAAAA7IQALDFqvNyOVioqIkS1svlZid0\nmFoaTPpEdxQlB1Lwbs5U9z1TQJKBSVAhHTmy6FSwINMNrRE/MOb8RfZ2PFB7cR+v\nM/PG3/XKj0vj5EVXHCiN9vvabj+A/jrDW6SB5X7vzik4DzFNbUtRkCHErXt5LFsD\n8PcUY+uv2LQF3gfRVXboFQb5E6staHaWe1qgab32HtfVGfzpDNfFFGJg8wiqqCKU\nO1qYgS7BG+3/9ngilBdSZsvMLkX563wmAa65Je6QWTpouNeTHY9+Og3lMjHLaFI3\n9R/kCV8GdN5tJafpuLi+qdl/tqt5dG6FcStAZOq35RyXUx9+m7AMzYtIb80DZWOo\nOH4qvLXUo5E89gEl/wYsc7vW3aT8Eqpw8/PLpFcvr0TA9dgQ5rDsFK/hs81r+Nrr\n5JUZl/uGFc1HdzARwU5VAUkFmhUvlohLJNC5crJZ+2VIqcfxssKJq/Z7Qm1dNSa3\ncgV+SIeGgbT4Atr6eABAZqcP/SL9TEcu2rsKnunmwxWjhpR1CmwhgjvYZZrZfPX/\ncpXJUWgbKnroYB9Iha/bfVxZ188dswJjTCGPccPnOZ7PgJ2qy3hGDZdeMKmB72pC\nOgIXBEv0mbdwmzU1KTZsfMyQf2/ZTAczyEJNAs87JTxoC0spdSSk8QUAPRCcJ4WF\n4y0pH2IxDEBCgxrzQTdw\n=jZfl\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 36bfe515235e08650a348f140da244abb4708033\nparent 394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9\nauthor Ruslan Lesiutin <rdlesyutin@gmail.com> 1725010492 +0100\ncommitter GitHub <noreply@github.com> 1725010492 +0100\n\nfix[react-devtools/ReactDebugHooks]: support unstable prefixes in hooks and useContextWithBailout (#30837)\n\nRelated - https://github.com/facebook/react/pull/30407.\r\n\r\nThis is experimental-only and FB-only hook. Without these changes,\r\ninspecting an element that is using this hook will throw an error,\r\nbecause this hook is missing in Dispatcher implementation from React\r\nDevTools, which overrides the original one to build the hook tree.\r\n\r\n![Screenshot 2024-08-28 at 18 42\r\n55](https://github.com/user-attachments/assets/e3bccb92-74fb-4e4a-8181-03d13f8512c0)\r\n\r\nOne nice thing from it is that in case of any potential regressions\r\nrelated to this experiment, we can quickly triage which implementation\r\nof `useContext` is used by inspecting an element in React DevTools.\r\n\r\nIdeally, I should've added some component that is using this hook to\r\n`react-devtools-shell`, so it can be manually tested, but I can't do it\r\nwithout rewriting the infra for it. This is because this hook is only\r\navailable from fb-www builds, and not experimental.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
    html_url:
      "https://github.com/facebook/react/commit/8308d2f1fe90ec0b5a5cde147b97c6e78581710a",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/8308d2f1fe90ec0b5a5cde147b97c6e78581710a/comments",
    author: {
      login: "hoxyq",
      id: 28902667,
      node_id: "MDQ6VXNlcjI4OTAyNjY3",
      avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hoxyq",
      html_url: "https://github.com/hoxyq",
      followers_url: "https://api.github.com/users/hoxyq/followers",
      following_url:
        "https://api.github.com/users/hoxyq/following{/other_user}",
      gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
      organizations_url: "https://api.github.com/users/hoxyq/orgs",
      repos_url: "https://api.github.com/users/hoxyq/repos",
      events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
      received_events_url: "https://api.github.com/users/hoxyq/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
        url: "https://api.github.com/repos/facebook/react/commits/394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
        html_url:
          "https://github.com/facebook/react/commit/394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
      },
    ],
  },
  {
    sha: "394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
    node_id:
      "C_kwDOAJy2KtoAKDM5NGU3NWQ5YTlhZjI2ZGMwMDA3NGYyYjhjMjk3OGQ4YzJkZmJiYjk",
    commit: {
      author: {
        name: "Rune Botten",
        email: "rbotten@gmail.com",
        date: "2024-08-30T09:34:27Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-30T09:34:27Z",
      },
      message:
        "[DevTools] Increase max payload for websocket in standalone app (#30848)\n\n<!--\r\n  Thanks for submitting a pull request!\r\nWe appreciate you spending the time to work on these changes. Please\r\nprovide enough information so that others can review your pull request.\r\nThe three fields below are mandatory.\r\n\r\nBefore submitting a pull request, please make sure the following is\r\ndone:\r\n\r\n1. Fork [the repository](https://github.com/facebook/react) and create\r\nyour branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n3. If you've fixed a bug or added code that should be tested, add tests!\r\n4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch\r\nTestName` is helpful in development.\r\n5. Run `yarn test --prod` to test in the production environment. It\r\nsupports the same options as `yarn test`.\r\n6. If you need a debugger, run `yarn test --debug --watch TestName`,\r\nopen `chrome://inspect`, and press \"Inspect\".\r\n7. Format your code with\r\n[prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only\r\ncheck changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\nLearn more about contributing:\r\nhttps://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\n<!--\r\nExplain the **motivation** for making this change. What existing problem\r\ndoes the pull request solve?\r\n-->\r\n\r\nWhen debugging applications that are experiencing runaway re-rendering,\r\nit is helpful to profile them in the React Developer Tools.\r\nUnfortunately there is a size limit on the captured profile which can\r\nmake them impossible to inspect or save. The limitations I have found\r\nare in `postMessage` for the Chrome extension and in the `ws` websocket\r\nserver for the standalone app.\r\n\r\nProfiling an app that produces a large profile artifact will simply show\r\nthat no profiling data was captured and output an error in the console,\r\nhere shown for the standalone app:\r\n\r\n```text\r\nstandalone.js:92 [React DevTools] Error with websocket connection i {target: H, type: 'error', message: 'Max payload size exceeded', error: RangeError: Max payload size exceeded\r\n    at e.exports.haveLength (/Users/rune/.npm/_npx/8ea6ac5c50…}error: RangeError: Max payload size exceeded\r\n```\r\n\r\nThis change simply increases the max payload of the websocket server in\r\nthe standalone app so that larger profiles may be captured and\r\ninspected.\r\n\r\n## How did you test this change?\r\n\r\n<!--\r\nDemonstrate the code is solid. Example: The exact commands you ran and\r\ntheir output, screenshots / videos if the pull request changes the user\r\ninterface.\r\nHow exactly did you verify that your PR solves the issue you wanted to\r\nsolve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n\r\nI verified that I could capture and inspect profiling data that\r\npreviously exceeded the default limitation for a particular app",
      tree: {
        sha: "760c3b74f3c1fbfb90ed73b5db029a24172529c3",
        url: "https://api.github.com/repos/facebook/react/git/trees/760c3b74f3c1fbfb90ed73b5db029a24172529c3",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0ZIjCRC1aQ7uu5UhlAAAtPEQAFRBV6mbSt/8WSiM8aGr4YXL\nxKsCSEDKC48vlot3d8kyRybgyQg1mSWw5+icLFmJ6UUwH9UBkE0xSFl656RcBDlK\npJcw8+4Q9mLp3hmqyr1uBi/CoZ19ISjEUqNKDS/ZPTY5GVS1abJHRMfeAJi+tY4X\n2t9MLgt92ZpHwT3ckGg1FCjJDBsto0yGRzsaEZdzGVnuSfkwYYgjNEj1Cigg5sr/\ncQuNC0ZmkkgQ2ZIs3/AjjCClB9nbN7VcIKRnoqKR+w63Z6u/1ewLhxEw7g61Vgv6\ntB6jV6Tl7lTeJQYZo0NP7mYtW3TqjA/2tODzpRRkm9xExBglAZu1IEvcQrdvbKgC\nefW1e3x4QfSqJtQeOc45y4SioXwDElWashVBuTadCtz1sk0F5aE/LBGmn1rM6YAi\nClVFOGfCSPVKMzA0lTuWDQRh0vNmXZtXukCfPDgU/ggdek8h2tz/bZ/9Xc5brFgX\nkygvHQMYRpR3Sd1sKdfEO1TPwhZTsoQlXxSRwVUKxFBSV1msbhcLzbcNb2UFlyO5\nC3alKid1RPkbQq1kkLvYzgoOJ4Xb0NzsJkLpTx0x4NAhvJDEL2Zvje75dhR4D9n5\nbWnfChQAuOZahuXX6tVHSOJcsE0RUUs+Hw4p4R54izVBOjp9FATNbRipRwDQKUC8\nJRSFLmWyEhfeH2cqAtHt\n=kqxy\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 760c3b74f3c1fbfb90ed73b5db029a24172529c3\nparent 071dd00366b3accb649e3f5978454e993e0b11aa\nauthor Rune Botten <rbotten@gmail.com> 1725010467 -0700\ncommitter GitHub <noreply@github.com> 1725010467 +0100\n\n[DevTools] Increase max payload for websocket in standalone app (#30848)\n\n<!--\r\n  Thanks for submitting a pull request!\r\nWe appreciate you spending the time to work on these changes. Please\r\nprovide enough information so that others can review your pull request.\r\nThe three fields below are mandatory.\r\n\r\nBefore submitting a pull request, please make sure the following is\r\ndone:\r\n\r\n1. Fork [the repository](https://github.com/facebook/react) and create\r\nyour branch from `main`.\r\n  2. Run `yarn` in the repository root.\r\n3. If you've fixed a bug or added code that should be tested, add tests!\r\n4. Ensure the test suite passes (`yarn test`). Tip: `yarn test --watch\r\nTestName` is helpful in development.\r\n5. Run `yarn test --prod` to test in the production environment. It\r\nsupports the same options as `yarn test`.\r\n6. If you need a debugger, run `yarn test --debug --watch TestName`,\r\nopen `chrome://inspect`, and press \"Inspect\".\r\n7. Format your code with\r\n[prettier](https://github.com/prettier/prettier) (`yarn prettier`).\r\n8. Make sure your code lints (`yarn lint`). Tip: `yarn linc` to only\r\ncheck changed files.\r\n  9. Run the [Flow](https://flowtype.org/) type checks (`yarn flow`).\r\n  10. If you haven't already, complete the CLA.\r\n\r\nLearn more about contributing:\r\nhttps://reactjs.org/docs/how-to-contribute.html\r\n-->\r\n\r\n## Summary\r\n\r\n<!--\r\nExplain the **motivation** for making this change. What existing problem\r\ndoes the pull request solve?\r\n-->\r\n\r\nWhen debugging applications that are experiencing runaway re-rendering,\r\nit is helpful to profile them in the React Developer Tools.\r\nUnfortunately there is a size limit on the captured profile which can\r\nmake them impossible to inspect or save. The limitations I have found\r\nare in `postMessage` for the Chrome extension and in the `ws` websocket\r\nserver for the standalone app.\r\n\r\nProfiling an app that produces a large profile artifact will simply show\r\nthat no profiling data was captured and output an error in the console,\r\nhere shown for the standalone app:\r\n\r\n```text\r\nstandalone.js:92 [React DevTools] Error with websocket connection i {target: H, type: 'error', message: 'Max payload size exceeded', error: RangeError: Max payload size exceeded\r\n    at e.exports.haveLength (/Users/rune/.npm/_npx/8ea6ac5c50…}error: RangeError: Max payload size exceeded\r\n```\r\n\r\nThis change simply increases the max payload of the websocket server in\r\nthe standalone app so that larger profiles may be captured and\r\ninspected.\r\n\r\n## How did you test this change?\r\n\r\n<!--\r\nDemonstrate the code is solid. Example: The exact commands you ran and\r\ntheir output, screenshots / videos if the pull request changes the user\r\ninterface.\r\nHow exactly did you verify that your PR solves the issue you wanted to\r\nsolve?\r\n  If you leave this empty, your PR will very likely be closed.\r\n-->\r\n\r\nI verified that I could capture and inspect profiling data that\r\npreviously exceeded the default limitation for a particular app",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
    html_url:
      "https://github.com/facebook/react/commit/394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/394e75d9a9af26dc00074f2b8c2978d8c2dfbbb9/comments",
    author: {
      login: "runeb",
      id: 38528,
      node_id: "MDQ6VXNlcjM4NTI4",
      avatar_url: "https://avatars.githubusercontent.com/u/38528?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/runeb",
      html_url: "https://github.com/runeb",
      followers_url: "https://api.github.com/users/runeb/followers",
      following_url:
        "https://api.github.com/users/runeb/following{/other_user}",
      gists_url: "https://api.github.com/users/runeb/gists{/gist_id}",
      starred_url: "https://api.github.com/users/runeb/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/runeb/subscriptions",
      organizations_url: "https://api.github.com/users/runeb/orgs",
      repos_url: "https://api.github.com/users/runeb/repos",
      events_url: "https://api.github.com/users/runeb/events{/privacy}",
      received_events_url: "https://api.github.com/users/runeb/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "071dd00366b3accb649e3f5978454e993e0b11aa",
        url: "https://api.github.com/repos/facebook/react/commits/071dd00366b3accb649e3f5978454e993e0b11aa",
        html_url:
          "https://github.com/facebook/react/commit/071dd00366b3accb649e3f5978454e993e0b11aa",
      },
    ],
  },
  {
    sha: "071dd00366b3accb649e3f5978454e993e0b11aa",
    node_id:
      "C_kwDOAJy2KtoAKDA3MWRkMDAzNjZiM2FjY2I2NDllM2Y1OTc4NDU0ZTk5M2UwYjExYWE",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-30T05:40:41Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-30T05:41:53Z",
      },
      message:
        "[compiler] Errors in earlier functions dont stop subsequent compilation\n\nErrors in an earlier component/hook shouldn't stop later components from compiling.\n\nghstack-source-id: 6e04a5bb2e2045303cbddad6d6d4bd38d5f7990b\nPull Request resolved: https://github.com/facebook/react/pull/30844",
      tree: {
        sha: "bdb8babef7591a00d3c6cc91347c596bae13d0ce",
        url: "https://api.github.com/repos/facebook/react/git/trees/bdb8babef7591a00d3c6cc91347c596bae13d0ce",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/071dd00366b3accb649e3f5978454e993e0b11aa",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/071dd00366b3accb649e3f5978454e993e0b11aa",
    html_url:
      "https://github.com/facebook/react/commit/071dd00366b3accb649e3f5978454e993e0b11aa",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/071dd00366b3accb649e3f5978454e993e0b11aa/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "61739a8a0fd23adf18336d96f9c307a1cd897354",
        url: "https://api.github.com/repos/facebook/react/commits/61739a8a0fd23adf18336d96f9c307a1cd897354",
        html_url:
          "https://github.com/facebook/react/commit/61739a8a0fd23adf18336d96f9c307a1cd897354",
      },
    ],
  },
  {
    sha: "61739a8a0fd23adf18336d96f9c307a1cd897354",
    node_id:
      "C_kwDOAJy2KtoAKDYxNzM5YThhMGZkMjNhZGYxODMzNmQ5NmY5YzMwN2ExY2Q4OTczNTQ",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-29T16:49:30Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T16:49:30Z",
      },
      message:
        '[DevTools] Filter Server Components (#30839)\n\nSupport filtering Virtual Instances with existing filters.\r\n\r\nServer Components are considered "Functions".\r\n\r\nIn a follow up I\'ll a new filter for "Environment" which will let you\r\nfilter by Client vs Server (and more).',
      tree: {
        sha: "c3d623932fb842c5fcb52c24915709f32d6b6730",
        url: "https://api.github.com/repos/facebook/react/git/trees/c3d623932fb842c5fcb52c24915709f32d6b6730",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/61739a8a0fd23adf18336d96f9c307a1cd897354",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0KaaCRC1aQ7uu5UhlAAA8QoQAHLyA3MtqMxX3HiKpTfs9g8g\nsMzNYrAc0p7jMYjAnCIZ8ZJyryO7J/FDnE0RmlXhs4JJS1zFPd3dbaBXIf2VHqHY\negPqoas11gHpphSVkcyVfAjKQv+V9D8PCYauiri9dwkfKJche0cq2oX2f87CfeAF\n+uX7ucqSB1wjlJ+fjAU+Oar6Qn0N0KKrbCFGnVr8vz2xst7yw4bCMCntTA5Qxrd8\nWf2aRyos7SK9TdEpPWGrr/qBJg6VHZK8PFo+mVi7Wg16jjl8IDRXN4mC5CHH8fqd\n91G0mzjTBZyN9SwwbUhJUaBa59DscIRAkwSTfv7pMla/5zZydUg8TqZFHTIF6wx7\nGdq5muEoIAZq0i2uor1XyR3lEGASW6MfheS0wkiKpO7dHlQjn/iOdtpjQnDFSTv7\nmUKGRM7zxIWliF/zuqHrVuCiyeMk0SUKDYsEAG2un/fXSr0j/0sqEEkXRzdcACb4\nesu/P1/B/Vx8ghXUpaDmjQvQfB28ttc4jv54KusBOvI/R2N8bA3BRCB3V5Q8VNqK\nXUyWy9OJPZMXYqzqAQyQfoWVxDfwyc4+3oDArbHpigxwq0XQCMHX/Z+GJVmhw8pW\narXHTa9VMUPQdqjgm1ojOQz1ajAjfCAySFtgZGQ9HhYG9W7FaSnvyvhXisOWnFbs\n1Zk/M/QBBS4WeAAj+USC\n=tX1c\n-----END PGP SIGNATURE-----\n",
        payload:
          'tree c3d623932fb842c5fcb52c24915709f32d6b6730\nparent e33a7233a76e1164bd1a9c4b8115abb575b48c50\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1724950170 -0400\ncommitter GitHub <noreply@github.com> 1724950170 -0400\n\n[DevTools] Filter Server Components (#30839)\n\nSupport filtering Virtual Instances with existing filters.\r\n\r\nServer Components are considered "Functions".\r\n\r\nIn a follow up I\'ll a new filter for "Environment" which will let you\r\nfilter by Client vs Server (and more).',
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/61739a8a0fd23adf18336d96f9c307a1cd897354",
    html_url:
      "https://github.com/facebook/react/commit/61739a8a0fd23adf18336d96f9c307a1cd897354",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/61739a8a0fd23adf18336d96f9c307a1cd897354/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "e33a7233a76e1164bd1a9c4b8115abb575b48c50",
        url: "https://api.github.com/repos/facebook/react/commits/e33a7233a76e1164bd1a9c4b8115abb575b48c50",
        html_url:
          "https://github.com/facebook/react/commit/e33a7233a76e1164bd1a9c4b8115abb575b48c50",
      },
    ],
  },
  {
    sha: "e33a7233a76e1164bd1a9c4b8115abb575b48c50",
    node_id:
      "C_kwDOAJy2KtoAKGUzM2E3MjMzYTc2ZTExNjRiZDFhOWM0YjgxMTVhYmI1NzViNDhjNTA",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-29T16:45:03Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T16:45:03Z",
      },
      message:
        "[DevTools] Track virtual instances on the tracked path for selections (#30802)\n\nThis appends a (filtered) virtual instance path at the end of the fiber\r\npath. If a virtual instance is selected inside the fiber.\r\n\r\nThe main part of the path is still just the fiber path since that's the\r\nsemantically stateful part. Then we just tack on a few virtual path\r\nframes at the end if we're currently selecting a specific Server\r\nComponent within the nearest Fiber.\r\n\r\nI also took the opportunity to fix a bug which caused selections inside\r\nSuspense boundaries to not be tracked.",
      tree: {
        sha: "5f5345595702270ff0d89bd651cecd810b854850",
        url: "https://api.github.com/repos/facebook/react/git/trees/5f5345595702270ff0d89bd651cecd810b854850",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/e33a7233a76e1164bd1a9c4b8115abb575b48c50",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0KWPCRC1aQ7uu5UhlAAAFl4QAFG1F3cUo/Co1g+Md9XHm8kC\nt1wFB+xj+FPG/zkMde0w06mNnASEh3ORY301havpcymA90o9PgKV0/VWqMfRSsGf\n/XchCPRd6GOFpXSxTfSEcbNNwvhpdE4f+7WPC8U5xJU5Xf6K5zyY96q3oRO87eKW\nbYWQf4nAjxTT2viJIfhlK4VlZuWPW9yN/AoIamLmk/SyZ7I0SX+HUQRDHeWPPfXv\na8Cd1iIuOFK1yVc0Mvihm9W+/642smR+PChouajLmozDcIeE6Sya2WrsduMz8Hj+\nnl3ZzZI2xCpmfUFGy4Fs/pstQ0U33ZpfCLe+K/n14JuJjpcB38hC1CEL8COi2fHW\nbB+SmLQuLoxCq38WW3n4m+PIgWOkDr0cqGkqScLRHAQQxQmvKiAceVaaqGvYhApp\nSmVQzinOc0LcBQORetP+KrXChgH5vz16TW4y4RUn3+pcfG6dYO00utuZIvWaCFBF\n0VSp7f3ix0m5V1eX+zPN1aExBsjXhG8vrgTll8Fh4zlmEvYiFZCaQrR7eFa95kTj\n8UJatdyF3kE9ms+tBiwz5c6bcNPGt7m5H9O5GYm73wK+FiPh+tjHVbH0dYdiXTl+\nbY1zi+1XGyChHqV/aFO2FCZvrAbo1deGGCrLKHDMrVskGyx59QdxsrLL+JsX+rst\nzkWbMhn3Ooqy+C0PT4r4\n=F+Oj\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 5f5345595702270ff0d89bd651cecd810b854850\nparent 18bf7bf5002450ce7daa281e8be1c3216bd871ed\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1724949903 -0400\ncommitter GitHub <noreply@github.com> 1724949903 -0400\n\n[DevTools] Track virtual instances on the tracked path for selections (#30802)\n\nThis appends a (filtered) virtual instance path at the end of the fiber\r\npath. If a virtual instance is selected inside the fiber.\r\n\r\nThe main part of the path is still just the fiber path since that's the\r\nsemantically stateful part. Then we just tack on a few virtual path\r\nframes at the end if we're currently selecting a specific Server\r\nComponent within the nearest Fiber.\r\n\r\nI also took the opportunity to fix a bug which caused selections inside\r\nSuspense boundaries to not be tracked.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/e33a7233a76e1164bd1a9c4b8115abb575b48c50",
    html_url:
      "https://github.com/facebook/react/commit/e33a7233a76e1164bd1a9c4b8115abb575b48c50",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/e33a7233a76e1164bd1a9c4b8115abb575b48c50/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "18bf7bf5002450ce7daa281e8be1c3216bd871ed",
        url: "https://api.github.com/repos/facebook/react/commits/18bf7bf5002450ce7daa281e8be1c3216bd871ed",
        html_url:
          "https://github.com/facebook/react/commit/18bf7bf5002450ce7daa281e8be1c3216bd871ed",
      },
    ],
  },
  {
    sha: "18bf7bf5002450ce7daa281e8be1c3216bd871ed",
    node_id:
      "C_kwDOAJy2KtoAKDE4YmY3YmY1MDAyNDUwY2U3ZGFhMjgxZThiZTFjMzIxNmJkODcxZWQ",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-29T16:44:48Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T16:44:48Z",
      },
      message:
        "[DevTools] Remove displayName from inspected data (#30841)\n\nThis just clarifies that this is actually unused in the front end. We\r\nuse the name from the original instance as the canonical name.",
      tree: {
        sha: "0c0eef1ecbd19c92cf7d3b13063a24e5131e535b",
        url: "https://api.github.com/repos/facebook/react/git/trees/0c0eef1ecbd19c92cf7d3b13063a24e5131e535b",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/18bf7bf5002450ce7daa281e8be1c3216bd871ed",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0KWACRC1aQ7uu5UhlAAAetIQAFgtK3cEEurf8SYf0FdGl9oW\nUqdoZlk/v5AeA02w163yaUta5jXuVToGnqT+kf0F8tavANxP6HNqmjR92M+p4c2A\nqxxMUOQ2nrVTmXYqiFtpYHpIe6/qLGJuY2U853/8YvkyM9hDB5nt6a+iHM7uxVKF\nXUIVE1P39JBU+mUhjZbPRy+I5UQ0vTgHfPz9gvj7peOmpLNq+PuNtJ++6UVJJdSh\nNPHZgMpjeoMJ7/kosDEllzFgJZjNGKDQUvSbRZW4E7CJhH2Xel60dmX8LNyR9Zmn\nVDyC2d+9Y6ieg7vyjqTz8t4poxoxVhVq8MI+78O7yhBL856jF7tjN+MDILlGc+lm\nARYs7HkYu9gISr0f5H5B8Yhhdlcn/cMKqwGlQN1UpZ/dDrxrfCfM63pLv2ljiNpW\n/dbpx6PsPdgwNUPgm1WDcAGAvMW1hzy4RXzn46uhJFzmnmVc5YocirMrKaVhKw30\nensbrnTWkfvfL/N46Wq6EDqKJeJG1m6qwcwpso9ylGgR+9kCTLE2BQKNIzyizWyp\n6iPcAIn5xnJ6QlM+I4AizVGkH2zB2SN5P8PTKfZaPDiRUEDOKxErcJT5+ny8w6/q\n3Evsc4GOuEfyDVq0SQI+9iYn2FyeB/fCcLRp3qtxI5WIhlCb/wEIhGm2jOL1L0DH\n5z2qdXFvu/4uQ9ZwntJa\n=loUy\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 0c0eef1ecbd19c92cf7d3b13063a24e5131e535b\nparent a19a8ab44f53f189745015a6d2e6bf8955f98170\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1724949888 -0400\ncommitter GitHub <noreply@github.com> 1724949888 -0400\n\n[DevTools] Remove displayName from inspected data (#30841)\n\nThis just clarifies that this is actually unused in the front end. We\r\nuse the name from the original instance as the canonical name.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/18bf7bf5002450ce7daa281e8be1c3216bd871ed",
    html_url:
      "https://github.com/facebook/react/commit/18bf7bf5002450ce7daa281e8be1c3216bd871ed",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/18bf7bf5002450ce7daa281e8be1c3216bd871ed/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "a19a8ab44f53f189745015a6d2e6bf8955f98170",
        url: "https://api.github.com/repos/facebook/react/commits/a19a8ab44f53f189745015a6d2e6bf8955f98170",
        html_url:
          "https://github.com/facebook/react/commit/a19a8ab44f53f189745015a6d2e6bf8955f98170",
      },
    ],
  },
  {
    sha: "a19a8ab44f53f189745015a6d2e6bf8955f98170",
    node_id:
      "C_kwDOAJy2KtoAKGExOWE4YWI0NGY1M2YxODk3NDUwMTVhNmQyZTZiZjg5NTVmOTgxNzA",
    commit: {
      author: {
        name: "Ruslan Lesiutin",
        email: "rdlesyutin@gmail.com",
        date: "2024-08-29T10:34:31Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T10:34:31Z",
      },
      message:
        "chore[react-devtools/hook]: remove unused native values (#30827)\n\nStacked on https://github.com/facebook/react/pull/30826. See [this\r\ncommit](https://github.com/facebook/react/pull/30827/commits/ec0e48ed7a47dbbdafb5e2530ccba1f2e5b17bad).\r\n\r\nThis is unused.",
      tree: {
        sha: "880194b0d041c278e43fab5434299c0fa7f15a5a",
        url: "https://api.github.com/repos/facebook/react/git/trees/880194b0d041c278e43fab5434299c0fa7f15a5a",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/a19a8ab44f53f189745015a6d2e6bf8955f98170",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0E63CRC1aQ7uu5UhlAAAvYAQAGW9ahBz54U/Yfsl6FhGppdz\ns6cnc3vPz2SMqm233wM8oNtFO9nxDtjsr1hzVvSmg04yTMSt4RW7TweSjH/o8Uzg\niBn1ovwel/fPhfM/jSLbmus/ekm7Sl4lbb/uNlTGf0GGzJZMye1xzaTOD3lNCLxw\njXLeY4HvMteIowtrfFrpHUBhdp9QYGzhMbXDTUlR6AH/OBbMhHGaVYFb5GtxyXRk\nbND2JP5lAqnWXbbrBIeBwmbOgaG6OXyDoJlnTrOVd3k7MnCXohbYiaNh9o3rMUEu\n/uEPR5tIGaVFA3wtI91Vg6ddxbONfRxKlAq2B3kyLGVxxvGjAE7nOG5T6K9iH3lM\nWIWLThxzipLgNf7YrnEnpyghGqgIVovd/AIfuvXX95YlP2RfLBaPvUeiHiIthXr0\nM4bIBhJCOYOtameFOyRmSu/qH8vTqvwQ71/C/ECRPRzzP2BZ7Cm3TggS6xIdQs3X\naCj+Wi3zTXFNbeK3AQYgK2lJW8JJ1IdeArl4kiupY2QaqI/7z7ywhEagYBiiQD+A\nFCZXVq3RbVqat3SxJniLXtOuUZsD+cncqmbWu358LVk/QMlav+RnDKrYCpDP7rka\nbUMdMlg/FzNx8tYC2SioZLhan79SDueD3PapXH8k85V0Ifvw22bAl4zYPJU7hJ3d\nAI+uCS9q88mJPyVEbYc7\n=nPFk\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 880194b0d041c278e43fab5434299c0fa7f15a5a\nparent 233d63c497d3a5f669a1bae1ee1d3f389e12a42a\nauthor Ruslan Lesiutin <rdlesyutin@gmail.com> 1724927671 +0100\ncommitter GitHub <noreply@github.com> 1724927671 +0100\n\nchore[react-devtools/hook]: remove unused native values (#30827)\n\nStacked on https://github.com/facebook/react/pull/30826. See [this\r\ncommit](https://github.com/facebook/react/pull/30827/commits/ec0e48ed7a47dbbdafb5e2530ccba1f2e5b17bad).\r\n\r\nThis is unused.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/a19a8ab44f53f189745015a6d2e6bf8955f98170",
    html_url:
      "https://github.com/facebook/react/commit/a19a8ab44f53f189745015a6d2e6bf8955f98170",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/a19a8ab44f53f189745015a6d2e6bf8955f98170/comments",
    author: {
      login: "hoxyq",
      id: 28902667,
      node_id: "MDQ6VXNlcjI4OTAyNjY3",
      avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hoxyq",
      html_url: "https://github.com/hoxyq",
      followers_url: "https://api.github.com/users/hoxyq/followers",
      following_url:
        "https://api.github.com/users/hoxyq/following{/other_user}",
      gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
      organizations_url: "https://api.github.com/users/hoxyq/orgs",
      repos_url: "https://api.github.com/users/hoxyq/repos",
      events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
      received_events_url: "https://api.github.com/users/hoxyq/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
        url: "https://api.github.com/repos/facebook/react/commits/233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
        html_url:
          "https://github.com/facebook/react/commit/233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
      },
    ],
  },
  {
    sha: "233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
    node_id:
      "C_kwDOAJy2KtoAKDIzM2Q2M2M0OTdkM2E1ZjY2OWExYmFlMWVlMWQzZjM4OWUxMmE0MmE",
    commit: {
      author: {
        name: "Ruslan Lesiutin",
        email: "rdlesyutin@gmail.com",
        date: "2024-08-29T10:32:18Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T10:32:18Z",
      },
      message:
        "chore[react-devtools/extensions]: remove unused storage permission (#30826)\n\nStacked on https://github.com/facebook/react/pull/30825. See [this\r\ncommit](https://github.com/facebook/react/pull/30826/commits/b2130701cf6b25d7a96c1e92b44f41affa56bb35).\r\n\r\nWe are not using `storage` anywhere yet, but will be soon. This\r\npermission is not needed.",
      tree: {
        sha: "9fc6189b89b761ed81ac7920fdbeaa3ee54c84d3",
        url: "https://api.github.com/repos/facebook/react/git/trees/9fc6189b89b761ed81ac7920fdbeaa3ee54c84d3",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0E4yCRC1aQ7uu5UhlAAAJtoQAH7qse4tky5/iQ7SJbYlBDsE\n6xQNSn8/LZ/qWTwbhu0KhSxetwrv5/nMf9WFN1WzLYARgSNwry6Q+8HFCpXfCho2\nRinsS4SIi+XxnWy2LUu2MQwKdJxYSnHVsIttJc9wDfTx4KGYYxdIrip4TULc9iq5\nGcdATtr4YyglT5aOKVdLBtGWhaQL2t4GYrf+J2F/o+2ULXtfZibNmLchOqfTzoyU\naJOmGYw2DaJZonbbMJpwJ5CcHj6woWAnQM/JXUg5aOvkTu7mDVy5xenSCyQu22JW\nv/aO6kisnhnwdkBiKryXUdb0V78u7NeFeFzz5yltoQf2H9AZkqzQWYu1plkoym0Y\n602UuZrhZaoEQZNIS/mjm/h66CKEo3hE7C5Iv31rGj/8qvANXgaXmU1iVjofRxJz\nnVqK3H0Uslj+6dQKCE2uM9bcMmsWxvFMjW1jQMwGVCBQp7MRma6tUvjO45PqM+WM\nPVCF0ZVYvgbJhur20vJZa5MGImKmx+diSgmi+w2ugcHNfc6lHmwvlpkuLin1BobX\neHJfnL1fLvzZxU/UXdx5CAxLRKjn0geIqQXj5DeSk/NPpei5ixiCBjJ8v6cRpJer\nB9yzQDGwxyrLu8kHBENlc3x6zDZp72ZMPPj/uI7NsOt5vbyvpyfSwrezdMZcdcht\nlKHczhcBvQBfPSX0SHhG\n=CsYw\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 9fc6189b89b761ed81ac7920fdbeaa3ee54c84d3\nparent 795b3207ce5ea25c80749e367c61e5f56ac09856\nauthor Ruslan Lesiutin <rdlesyutin@gmail.com> 1724927538 +0100\ncommitter GitHub <noreply@github.com> 1724927538 +0100\n\nchore[react-devtools/extensions]: remove unused storage permission (#30826)\n\nStacked on https://github.com/facebook/react/pull/30825. See [this\r\ncommit](https://github.com/facebook/react/pull/30826/commits/b2130701cf6b25d7a96c1e92b44f41affa56bb35).\r\n\r\nWe are not using `storage` anywhere yet, but will be soon. This\r\npermission is not needed.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
    html_url:
      "https://github.com/facebook/react/commit/233d63c497d3a5f669a1bae1ee1d3f389e12a42a",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/233d63c497d3a5f669a1bae1ee1d3f389e12a42a/comments",
    author: {
      login: "hoxyq",
      id: 28902667,
      node_id: "MDQ6VXNlcjI4OTAyNjY3",
      avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hoxyq",
      html_url: "https://github.com/hoxyq",
      followers_url: "https://api.github.com/users/hoxyq/followers",
      following_url:
        "https://api.github.com/users/hoxyq/following{/other_user}",
      gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
      organizations_url: "https://api.github.com/users/hoxyq/orgs",
      repos_url: "https://api.github.com/users/hoxyq/repos",
      events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
      received_events_url: "https://api.github.com/users/hoxyq/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "795b3207ce5ea25c80749e367c61e5f56ac09856",
        url: "https://api.github.com/repos/facebook/react/commits/795b3207ce5ea25c80749e367c61e5f56ac09856",
        html_url:
          "https://github.com/facebook/react/commit/795b3207ce5ea25c80749e367c61e5f56ac09856",
      },
    ],
  },
  {
    sha: "795b3207ce5ea25c80749e367c61e5f56ac09856",
    node_id:
      "C_kwDOAJy2KtoAKDc5NWIzMjA3Y2U1ZWEyNWM4MDc0OWUzNjdjNjFlNWY1NmFjMDk4NTY",
    commit: {
      author: {
        name: "Ruslan Lesiutin",
        email: "rdlesyutin@gmail.com",
        date: "2024-08-29T10:31:43Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T10:31:43Z",
      },
      message:
        "fix[react-devtools/extensions]: fixed tabs API calls and displaying restricted access popup (#30825)\n\nStacked on https://github.com/facebook/react/pull/30824. See [this\r\ncommit](https://github.com/facebook/react/pull/30825/commits/c9830d64749cf8fd592ea30a1cd65842cf83f6df).\r\n\r\nTurns out we should be listing `tabs` in our permissions, if we want to\r\nbe able to receive tab url, once its updated.\r\nThis also fixes `chrome.tabs.onCreated` event subscription, because [it\r\nshould receive only tab\r\nobject](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onCreated),\r\nand not 3 arguments, as expected in the previous implementation.",
      tree: {
        sha: "b374832e35b65670a8fbe9bd9840a2f0bada0159",
        url: "https://api.github.com/repos/facebook/react/git/trees/b374832e35b65670a8fbe9bd9840a2f0bada0159",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/795b3207ce5ea25c80749e367c61e5f56ac09856",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0E4PCRC1aQ7uu5UhlAAAgzMQAE3kgooLmJmBMYhHdv2FUwq1\nrJatsThLGpX8hs/6tWgu5W9JRy10iZaZFZ6QzUtyyxze4GGS0uUi+E3JcO+Jcnhz\n0+ILxAfARU23drQRblj+DjxmuXQwr4h3e7C91d4RN36pSFhUyF9ygBoGB3vETOny\nl7XBbYeodCyPNaa1ZTTI7M8IFQ7jkx+/841xP9crRxRnDbqOo90mtPB9ztYmrSEP\nP5YGnMB9c54/Wpd2p6OfhgPp1LvAt52FqsDtXNRiaOsMHcSm+fZE39QPeU6XJp3M\n/9LadjaaYwim7xKIBni33e9jw42F+fvBBC7sZCBiUbnqA4jk4v9yFjukqSPdZ3SB\nJLYZ9PiXflAJyFJc/lyMPpHQO0UjGW6zwdG6M6Kq2JM9Z9hanXH1SKVHBK178Ks4\nDI78S/sEbq+S8cO9Ropm+cX+IFVg6+KwBVDI/hEk+aE8p9XrEqGXZS7ek/jfXWb4\nfFU8/u8gcBqKOLFCgpDdWeAqnw9JPidlg7AwDAPwNNM3xGpYBT1pmhqriFYWfreH\nzt6qHPQqJ+p9Jv2vNfnLwoPZTfo+HTZdA3IpIvfGHzfeXXfu5hsd4IwxSYzghM+v\ndr/pUCM33lVMpmHaLFFJhAW9cUyoTWYmuDeKnSwdmUrRH95fLRB9ewoOhNwX+KGq\nZi9Wlp2j0Vxewlw6I1fw\n=Hn71\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree b374832e35b65670a8fbe9bd9840a2f0bada0159\nparent 537c74e16a394df16a4b368caa09ea5755f78dfb\nauthor Ruslan Lesiutin <rdlesyutin@gmail.com> 1724927503 +0100\ncommitter GitHub <noreply@github.com> 1724927503 +0100\n\nfix[react-devtools/extensions]: fixed tabs API calls and displaying restricted access popup (#30825)\n\nStacked on https://github.com/facebook/react/pull/30824. See [this\r\ncommit](https://github.com/facebook/react/pull/30825/commits/c9830d64749cf8fd592ea30a1cd65842cf83f6df).\r\n\r\nTurns out we should be listing `tabs` in our permissions, if we want to\r\nbe able to receive tab url, once its updated.\r\nThis also fixes `chrome.tabs.onCreated` event subscription, because [it\r\nshould receive only tab\r\nobject](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onCreated),\r\nand not 3 arguments, as expected in the previous implementation.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/795b3207ce5ea25c80749e367c61e5f56ac09856",
    html_url:
      "https://github.com/facebook/react/commit/795b3207ce5ea25c80749e367c61e5f56ac09856",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/795b3207ce5ea25c80749e367c61e5f56ac09856/comments",
    author: {
      login: "hoxyq",
      id: 28902667,
      node_id: "MDQ6VXNlcjI4OTAyNjY3",
      avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hoxyq",
      html_url: "https://github.com/hoxyq",
      followers_url: "https://api.github.com/users/hoxyq/followers",
      following_url:
        "https://api.github.com/users/hoxyq/following{/other_user}",
      gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
      organizations_url: "https://api.github.com/users/hoxyq/orgs",
      repos_url: "https://api.github.com/users/hoxyq/repos",
      events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
      received_events_url: "https://api.github.com/users/hoxyq/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "537c74e16a394df16a4b368caa09ea5755f78dfb",
        url: "https://api.github.com/repos/facebook/react/commits/537c74e16a394df16a4b368caa09ea5755f78dfb",
        html_url:
          "https://github.com/facebook/react/commit/537c74e16a394df16a4b368caa09ea5755f78dfb",
      },
    ],
  },
  {
    sha: "537c74e16a394df16a4b368caa09ea5755f78dfb",
    node_id:
      "C_kwDOAJy2KtoAKDUzN2M3NGUxNmEzOTRkZjE2YTRiMzY4Y2FhMDllYTU3NTVmNzhkZmI",
    commit: {
      author: {
        name: "Ruslan Lesiutin",
        email: "rdlesyutin@gmail.com",
        date: "2024-08-29T10:28:35Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-29T10:28:35Z",
      },
      message:
        "feat[react-devtools]: support Manifest v3 for Firefox extension (#30824)\n\nFirefox [finally supports\r\n`ExecutionWorld.MAIN`](https://bugzilla.mozilla.org/show_bug.cgi?id=1736575)\r\nin content scripts, which means we can migrate the browser extension to\r\nManifest V3.\r\n\r\nThis PR also removes a bunch of no longer required explicit branching\r\nfor Firefox case, when we are using Manifest V3-only APIs.\r\n\r\nWe are also removing XMLHttpRequest injection, which is no longer needed\r\nand restricted in Manifest V3. The new standardized approach (same as in\r\nChromium) doesn't violate CSP rules, which means that extension can\r\nfinally be used for apps running in production mode.",
      tree: {
        sha: "cfa6c4b532839951061f804583f601a5e47af221",
        url: "https://api.github.com/repos/facebook/react/git/trees/cfa6c4b532839951061f804583f601a5e47af221",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/537c74e16a394df16a4b368caa09ea5755f78dfb",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJm0E1TCRC1aQ7uu5UhlAAAHpoQACqDnItr70VPTfNkXfOAz+76\nJ5RSZJqYi0z3Sh5EM5X/9pA8nFwetrppvwRNbVVnIwR937ohLEnxjL7flmARiCUX\nm/JWGR6fEP0NKSf1DpGTxQ1gHY4EGRsIwuROS5/6TBb2pQfXRaGu2N9QH48GC06U\nxf2Gae3qCt8jLMBG8GeM/Fug/8DjORvjem1dhp88is0A3J1nHA/kyJTyardQPBhw\nt8U6pG06MwLuyGW9QPVBB0sMB7BJPkrUclQ3dR44dATjQXlU+lzX9shDUKZmWn6o\nwuL41BPSGK2WXkDn0tV1Viwza2SGFWAA9vAA5Jr5cZNADABqrO2nXnfatDbsbUBH\nzJxoXcDk5L31PwmQ7l9yBFQ0eq39cJMs7LXnZKlu3LpICKSjoGqb36U5Q/tHVj8H\nFZ0XsCG2oQrZiCr3QUrj9AQ1x0tYfZ1HWQ9k0Rtu1fzDxiSQvp35ebzp9kfhLK+7\nbZ9NN8S+RNWfz46NJF/pYPiLCdyLipFP/fKSvpelKsvY7wFSaeBotjaiMF8EWH1q\ni9ufEtU4midqALu7fG3rIlk+5EqyZSEWvoWwkVKc62B/EAc3MORXh4wHwfj1l4B7\nY5SVye7Alqya31IN4Di3ayzuIbSmLD3ZkLpgNVTwvBiwjWYcCYzyTOKnRvN9KYZY\nxDkUgRCUdZDG74MtaAhS\n=76GZ\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree cfa6c4b532839951061f804583f601a5e47af221\nparent fc0df475c4417670272b819bad92590b310bcdaa\nauthor Ruslan Lesiutin <rdlesyutin@gmail.com> 1724927315 +0100\ncommitter GitHub <noreply@github.com> 1724927315 +0100\n\nfeat[react-devtools]: support Manifest v3 for Firefox extension (#30824)\n\nFirefox [finally supports\r\n`ExecutionWorld.MAIN`](https://bugzilla.mozilla.org/show_bug.cgi?id=1736575)\r\nin content scripts, which means we can migrate the browser extension to\r\nManifest V3.\r\n\r\nThis PR also removes a bunch of no longer required explicit branching\r\nfor Firefox case, when we are using Manifest V3-only APIs.\r\n\r\nWe are also removing XMLHttpRequest injection, which is no longer needed\r\nand restricted in Manifest V3. The new standardized approach (same as in\r\nChromium) doesn't violate CSP rules, which means that extension can\r\nfinally be used for apps running in production mode.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/537c74e16a394df16a4b368caa09ea5755f78dfb",
    html_url:
      "https://github.com/facebook/react/commit/537c74e16a394df16a4b368caa09ea5755f78dfb",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/537c74e16a394df16a4b368caa09ea5755f78dfb/comments",
    author: {
      login: "hoxyq",
      id: 28902667,
      node_id: "MDQ6VXNlcjI4OTAyNjY3",
      avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hoxyq",
      html_url: "https://github.com/hoxyq",
      followers_url: "https://api.github.com/users/hoxyq/followers",
      following_url:
        "https://api.github.com/users/hoxyq/following{/other_user}",
      gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
      organizations_url: "https://api.github.com/users/hoxyq/orgs",
      repos_url: "https://api.github.com/users/hoxyq/repos",
      events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
      received_events_url: "https://api.github.com/users/hoxyq/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "fc0df475c4417670272b819bad92590b310bcdaa",
        url: "https://api.github.com/repos/facebook/react/commits/fc0df475c4417670272b819bad92590b310bcdaa",
        html_url:
          "https://github.com/facebook/react/commit/fc0df475c4417670272b819bad92590b310bcdaa",
      },
    ],
  },
  {
    sha: "fc0df475c4417670272b819bad92590b310bcdaa",
    node_id:
      "C_kwDOAJy2KtoAKGZjMGRmNDc1YzQ0MTc2NzAyNzJiODE5YmFkOTI1OTBiMzEwYmNkYWE",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:16:02Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:26Z",
      },
      message:
        "[compiler] Inferred deps must match exact optionality of manual deps\n\nTo prevent any difference in behavior, we check that the optionality of the inferred deps exactly matches the optionality of the manual dependencies. This required a fix, I was incorrectly inferring optionality of manual deps (they're only optional if OptionalTerminal.optional is true) - for nested cases of mixed optional/non-optional.\n\nghstack-source-id: afd49e89cc3194eb3c317ca7434d3fa948896bff\nPull Request resolved: https://github.com/facebook/react/pull/30840",
      tree: {
        sha: "afd49e89cc3194eb3c317ca7434d3fa948896bff",
        url: "https://api.github.com/repos/facebook/react/git/trees/afd49e89cc3194eb3c317ca7434d3fa948896bff",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/fc0df475c4417670272b819bad92590b310bcdaa",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/fc0df475c4417670272b819bad92590b310bcdaa",
    html_url:
      "https://github.com/facebook/react/commit/fc0df475c4417670272b819bad92590b310bcdaa",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/fc0df475c4417670272b819bad92590b310bcdaa/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
        url: "https://api.github.com/repos/facebook/react/commits/3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
        html_url:
          "https://github.com/facebook/react/commit/3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
      },
    ],
  },
  {
    sha: "3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
    node_id:
      "C_kwDOAJy2KtoAKDNhNDViYTI0MWMwMjhjZDBhZjdiZjE3YmI0YzY0ODdkMDA5NWExMGY",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T19:12:29Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:26Z",
      },
      message:
        "[compiler] Enable optional dependencies by default\n\nPer title. This gives us much more granular memoization when the source used optional member expressions. Note that we only infer optional deps when the source used optionals: we don't (yet) infer optional dependencies from conditionals.\n\nghstack-source-id: 104d0b712d09498239e926e306c4623d546463b1\nPull Request resolved: https://github.com/facebook/react/pull/30838",
      tree: {
        sha: "104d0b712d09498239e926e306c4623d546463b1",
        url: "https://api.github.com/repos/facebook/react/git/trees/104d0b712d09498239e926e306c4623d546463b1",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
    html_url:
      "https://github.com/facebook/react/commit/3a45ba241c028cd0af7bf17bb4c6487d0095a10f",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/3a45ba241c028cd0af7bf17bb4c6487d0095a10f/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
        url: "https://api.github.com/repos/facebook/react/commits/99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
        html_url:
          "https://github.com/facebook/react/commit/99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
      },
    ],
  },
  {
    sha: "99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
    node_id:
      "C_kwDOAJy2KtoAKDk5YTRiMjZlMThhNzFhMmVkNWFmNWVjMTFmNGI5YmFjZTM4ODJmN2U",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:52:37Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        "[compiler] Handle optional where innermost property access is non-optional\n\nHandles an additional case as part of testing combinations of the same path being accessed in different places with different segments as optional/unconditional.\n\nghstack-source-id: ace777fcbb98fa8f41b977d0aec8418f3f58fb7b\nPull Request resolved: https://github.com/facebook/react/pull/30836",
      tree: {
        sha: "ace777fcbb98fa8f41b977d0aec8418f3f58fb7b",
        url: "https://api.github.com/repos/facebook/react/git/trees/ace777fcbb98fa8f41b977d0aec8418f3f58fb7b",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
    html_url:
      "https://github.com/facebook/react/commit/99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/99a4b26e18a71a2ed5af5ec11f4b9bace3882f7e/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "7475d568da137b661ce23edc24446871d58c67ef",
        url: "https://api.github.com/repos/facebook/react/commits/7475d568da137b661ce23edc24446871d58c67ef",
        html_url:
          "https://github.com/facebook/react/commit/7475d568da137b661ce23edc24446871d58c67ef",
      },
    ],
  },
  {
    sha: "7475d568da137b661ce23edc24446871d58c67ef",
    node_id:
      "C_kwDOAJy2KtoAKDc0NzVkNTY4ZGExMzdiNjYxY2UyM2VkYzI0NDQ2ODcxZDU4YzY3ZWY",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:52:36Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        "[wip][compiler] Infer optional dependencies\n\nUpdates PropagateScopeDeps and DeriveMinimalDeps to understand optional dependency paths (`a?.b`). There a few key pieces to this:\n\nIn PropagateScopeDeps we jump through some hoops to work around the awkward structure of nested OptionalExpressions. This is much easier in HIR form, but I managed to get this pretty close and i think it will be landable with further cleanup. A good chunk of this is avoiding prematurely registering a value as a dependency - there are a bunch of indirections in the ReactiveFunction structure:\n\n```\nt0 = OptionalExpression\n  SequenceExpression\n    t0 = Sequence\n      ...\n    LoadLocal t0\n```\n\nWhere if at any point we call `visitOperand()` we'll prematurely register a dependency instead of declareProperty(). The other bit is that optionals can be optional=false for nested member expressions where not all the parts are actually optional (`foo.bar?.bar.call()`). And of course, parts of an optional chain can still be conditional even when optional=true (for example the `x` in `foo.bar?.[x]?.baz`). Not all of this is tested yet so there are likely bugs still.\n\nThe other bit is DeriveMinimalDeps, which is thankfully easier. We add OptionalAccess and OptionalDep and update the merge and reducing logic for these cases. There is probably still more to update though, for things like merging subtrees. There are a lot of ternaries that assume a result can be exactly one of two states (conditional/unconditional, dependency/access) and these assumptions don't hold anymore. I'd like to refactor to dependency/access separate from conditional/optional/unconditional. Also, the reducing logic isn't quite right: once a child is optional we keep inferring all the parents as optional too, losing some precision. I need to adjust the reducing logic to let children decide whether their path token is optional or not.\n\nghstack-source-id: 207842ac64560cf0f93ec96eb9ae1f17c62493ac\nPull Request resolved: https://github.com/facebook/react/pull/30819",
      tree: {
        sha: "207842ac64560cf0f93ec96eb9ae1f17c62493ac",
        url: "https://api.github.com/repos/facebook/react/git/trees/207842ac64560cf0f93ec96eb9ae1f17c62493ac",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/7475d568da137b661ce23edc24446871d58c67ef",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/7475d568da137b661ce23edc24446871d58c67ef",
    html_url:
      "https://github.com/facebook/react/commit/7475d568da137b661ce23edc24446871d58c67ef",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/7475d568da137b661ce23edc24446871d58c67ef/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
        url: "https://api.github.com/repos/facebook/react/commits/9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
        html_url:
          "https://github.com/facebook/react/commit/9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
      },
    ],
  },
  {
    sha: "9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
    node_id:
      "C_kwDOAJy2KtoAKDkxODBhMzdmYmEwYzlhZDY0MmJmYzZlMWMyODM5Zjg4ZjY2NDg1YWI",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:52:35Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        '[compiler] Allow inferred non-optional paths when manual deps were optional\n\nIf the inferred deps are more precise (non-optional) than the manual deps (optional) it should pass validation.\n\nThe other direction also seems like it would be fine - inferring optional deps when the original was non-optional - but for now let\'s keep the "at least as precise" rule.\n\nghstack-source-id: 9f7a99ee5f7caa2c2d96f70f360e4320bac3de2d\nPull Request resolved: https://github.com/facebook/react/pull/30816',
      tree: {
        sha: "9f7a99ee5f7caa2c2d96f70f360e4320bac3de2d",
        url: "https://api.github.com/repos/facebook/react/git/trees/9f7a99ee5f7caa2c2d96f70f360e4320bac3de2d",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
    html_url:
      "https://github.com/facebook/react/commit/9180a37fba0c9ad642bfc6e1c2839f88f66485ab",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/9180a37fba0c9ad642bfc6e1c2839f88f66485ab/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "925c20a20674254391b7752aa216ec417c8f52a3",
        url: "https://api.github.com/repos/facebook/react/commits/925c20a20674254391b7752aa216ec417c8f52a3",
        html_url:
          "https://github.com/facebook/react/commit/925c20a20674254391b7752aa216ec417c8f52a3",
      },
    ],
  },
  {
    sha: "925c20a20674254391b7752aa216ec417c8f52a3",
    node_id:
      "C_kwDOAJy2KtoAKDkyNWMyMGEyMDY3NDI1NDM5MWI3NzUyYWEyMTZlYzQxN2M4ZjUyYTM",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:52:34Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        "[compiler] Add fallthrough to branch terminal\n\nBranch terminals didn't have a fallthrough because they correspond to an outer terminal (optional, logical, etc) that has the \"real\" fallthrough. But understanding how branch terminals correspond to these outer terminals requires knowing the branch fallthrough. For example, `foo?.bar?.baz` creates terminals along the lines of:\n\n```\nbb0:\n  optional fallthrough=bb4\nbb1:\n  optional fallthrough=bb3\nbb2:\n  ...\n  branch ... (fallthrough=bb3)\n\n...\n\nbb3:\n  ...\n  branch ... (fallthrough=bb4)\n\n...\n\nbb4:\n  ...\n```\n\nWithout a fallthrough on `branch` terminals, it's unclear that the optional from bb0 has its branch node in bb3. With the fallthroughs, we can see look for a branch with the same fallthrough as the outer optional terminal to match them up.\n\nghstack-source-id: d48c6232899864716eef71798a278b487d30eafc\nPull Request resolved: https://github.com/facebook/react/pull/30814",
      tree: {
        sha: "d48c6232899864716eef71798a278b487d30eafc",
        url: "https://api.github.com/repos/facebook/react/git/trees/d48c6232899864716eef71798a278b487d30eafc",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/925c20a20674254391b7752aa216ec417c8f52a3",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/925c20a20674254391b7752aa216ec417c8f52a3",
    html_url:
      "https://github.com/facebook/react/commit/925c20a20674254391b7752aa216ec417c8f52a3",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/925c20a20674254391b7752aa216ec417c8f52a3/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
        url: "https://api.github.com/repos/facebook/react/commits/a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
        html_url:
          "https://github.com/facebook/react/commit/a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
      },
    ],
  },
  {
    sha: "a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
    node_id:
      "C_kwDOAJy2KtoAKGE3MThkYTBiMjNjM2Y3MmJhNmZiOGUxYmQwODdhY2E4NWYyYjBiNGE",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:52:33Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        "[compiler] Add DependencyPath optional property\n\nAdds an `optional: boolean` property to each token in a DependencyPath, currently always set to false. Also updates the equality and printing logic for paths to account for this field.\n\nSubsequent PRs will update our logic to determine which manual dependencies were optional, then we can start inferring optional deps as well.\n\nghstack-source-id: 66c2da2cfab5e5ba6c2ac5e20adae5e4f615ad29\nPull Request resolved: https://github.com/facebook/react/pull/30813",
      tree: {
        sha: "66c2da2cfab5e5ba6c2ac5e20adae5e4f615ad29",
        url: "https://api.github.com/repos/facebook/react/git/trees/66c2da2cfab5e5ba6c2ac5e20adae5e4f615ad29",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
    html_url:
      "https://github.com/facebook/react/commit/a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/a718da0b23c3f72ba6fb8e1bd087aca85f2b0b4a/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "4759161ed8d8f77bad654b6c23a063c8ad8d4864",
        url: "https://api.github.com/repos/facebook/react/commits/4759161ed8d8f77bad654b6c23a063c8ad8d4864",
        html_url:
          "https://github.com/facebook/react/commit/4759161ed8d8f77bad654b6c23a063c8ad8d4864",
      },
    ],
  },
  {
    sha: "4759161ed8d8f77bad654b6c23a063c8ad8d4864",
    node_id:
      "C_kwDOAJy2KtoAKDQ3NTkxNjFlZDhkOGY3N2JhZDY1NGI2YzIzYTA2M2M4YWQ4ZDQ4NjQ",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:52:33Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        "[compiler] Wrap ReactiveScopeDep path tokens in object\n\nPreviously the path of a ReactiveScopeDependency was `Array<string>`. We need to track whether each property access is optional or not, so as a first step we change this to `Array<{property: string}>`, making space for an additional property in a subsequent PR.\n\nghstack-source-id: c5d38d72f6b9d084a5df69ad23178794468f5f8b\nPull Request resolved: https://github.com/facebook/react/pull/30812",
      tree: {
        sha: "c5d38d72f6b9d084a5df69ad23178794468f5f8b",
        url: "https://api.github.com/repos/facebook/react/git/trees/c5d38d72f6b9d084a5df69ad23178794468f5f8b",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/4759161ed8d8f77bad654b6c23a063c8ad8d4864",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/4759161ed8d8f77bad654b6c23a063c8ad8d4864",
    html_url:
      "https://github.com/facebook/react/commit/4759161ed8d8f77bad654b6c23a063c8ad8d4864",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/4759161ed8d8f77bad654b6c23a063c8ad8d4864/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "5e51d767d179fda586f28e1118fb9ec5c200e35e",
        url: "https://api.github.com/repos/facebook/react/commits/5e51d767d179fda586f28e1118fb9ec5c200e35e",
        html_url:
          "https://github.com/facebook/react/commit/5e51d767d179fda586f28e1118fb9ec5c200e35e",
      },
    ],
  },
  {
    sha: "5e51d767d179fda586f28e1118fb9ec5c200e35e",
    node_id:
      "C_kwDOAJy2KtoAKDVlNTFkNzY3ZDE3OWZkYTU4NmYyOGUxMTE4ZmI5ZWM1YzIwMGUzNWU",
    commit: {
      author: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T17:44:44Z",
      },
      committer: {
        name: "Joe Savona",
        email: "joesavona@fb.com",
        date: "2024-08-28T22:59:25Z",
      },
      message:
        "[compiler] Stop reusing ScopeDep type in AnalyzeFunctions\n\nAnalyzeFunctions was reusing the `ReactiveScopeDependency` type since it happened to have a convenient shape, but we need to change this type to represent optionality. We now use a locally defined type instead.\n\nghstack-source-id: e305c6ede4bcbdffce606336c572cdc6dc1556c3\nPull Request resolved: https://github.com/facebook/react/pull/30811",
      tree: {
        sha: "e305c6ede4bcbdffce606336c572cdc6dc1556c3",
        url: "https://api.github.com/repos/facebook/react/git/trees/e305c6ede4bcbdffce606336c572cdc6dc1556c3",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/5e51d767d179fda586f28e1118fb9ec5c200e35e",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/5e51d767d179fda586f28e1118fb9ec5c200e35e",
    html_url:
      "https://github.com/facebook/react/commit/5e51d767d179fda586f28e1118fb9ec5c200e35e",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/5e51d767d179fda586f28e1118fb9ec5c200e35e/comments",
    author: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "josephsavona",
      id: 6425824,
      node_id: "MDQ6VXNlcjY0MjU4MjQ=",
      avatar_url: "https://avatars.githubusercontent.com/u/6425824?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/josephsavona",
      html_url: "https://github.com/josephsavona",
      followers_url: "https://api.github.com/users/josephsavona/followers",
      following_url:
        "https://api.github.com/users/josephsavona/following{/other_user}",
      gists_url: "https://api.github.com/users/josephsavona/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/josephsavona/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/josephsavona/subscriptions",
      organizations_url: "https://api.github.com/users/josephsavona/orgs",
      repos_url: "https://api.github.com/users/josephsavona/repos",
      events_url: "https://api.github.com/users/josephsavona/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/josephsavona/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "7771d3a7972cc2483c45fde51b7ec2d926cba097",
        url: "https://api.github.com/repos/facebook/react/commits/7771d3a7972cc2483c45fde51b7ec2d926cba097",
        html_url:
          "https://github.com/facebook/react/commit/7771d3a7972cc2483c45fde51b7ec2d926cba097",
      },
    ],
  },
  {
    sha: "7771d3a7972cc2483c45fde51b7ec2d926cba097",
    node_id:
      "C_kwDOAJy2KtoAKDc3NzFkM2E3OTcyY2MyNDgzYzQ1ZmRlNTFiN2VjMmQ5MjZjYmEwOTc",
    commit: {
      author: {
        name: "Mike Vitousek",
        email: "mmvitousek@gmail.com",
        date: "2024-08-27T17:11:50Z",
      },
      committer: {
        name: "Mike Vitousek",
        email: "mmvitousek@gmail.com",
        date: "2024-08-27T17:11:50Z",
      },
      message:
        "[compiler] Track refs through object expressions and property lookups\n\nSummary:\nThis addresses the issue of the compiler being overly restrictive about refs escaping into object expressions. Rather than erroring whenever a ref flows into an object, we will now treat the object itself as a ref, and apply the same escape rules to it. Whenever we look up a property from a ref value, we now don't know whether that value is itself a ref or a ref value, so we assume it's both.\n\nThe same logic applies to ref-accessing functions--if such a function is stored in an object, we'll propagate that property to the object itself and any properties looked up from it.\n\nghstack-source-id: 5c6fcb895d4a1658ce9dddec286aad3a57a4c9f1\nPull Request resolved: https://github.com/facebook/react/pull/30821",
      tree: {
        sha: "4f7d2885cf3d46e3b369523bbbfb68a265714ad9",
        url: "https://api.github.com/repos/facebook/react/git/trees/4f7d2885cf3d46e3b369523bbbfb68a265714ad9",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/7771d3a7972cc2483c45fde51b7ec2d926cba097",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/7771d3a7972cc2483c45fde51b7ec2d926cba097",
    html_url:
      "https://github.com/facebook/react/commit/7771d3a7972cc2483c45fde51b7ec2d926cba097",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/7771d3a7972cc2483c45fde51b7ec2d926cba097/comments",
    author: {
      login: "mvitousek",
      id: 1629813,
      node_id: "MDQ6VXNlcjE2Mjk4MTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/1629813?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mvitousek",
      html_url: "https://github.com/mvitousek",
      followers_url: "https://api.github.com/users/mvitousek/followers",
      following_url:
        "https://api.github.com/users/mvitousek/following{/other_user}",
      gists_url: "https://api.github.com/users/mvitousek/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mvitousek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mvitousek/subscriptions",
      organizations_url: "https://api.github.com/users/mvitousek/orgs",
      repos_url: "https://api.github.com/users/mvitousek/repos",
      events_url: "https://api.github.com/users/mvitousek/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mvitousek/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "mvitousek",
      id: 1629813,
      node_id: "MDQ6VXNlcjE2Mjk4MTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/1629813?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mvitousek",
      html_url: "https://github.com/mvitousek",
      followers_url: "https://api.github.com/users/mvitousek/followers",
      following_url:
        "https://api.github.com/users/mvitousek/following{/other_user}",
      gists_url: "https://api.github.com/users/mvitousek/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mvitousek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mvitousek/subscriptions",
      organizations_url: "https://api.github.com/users/mvitousek/orgs",
      repos_url: "https://api.github.com/users/mvitousek/repos",
      events_url: "https://api.github.com/users/mvitousek/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mvitousek/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "f2841c2a490b4b776b98568871b69693fedf985c",
        url: "https://api.github.com/repos/facebook/react/commits/f2841c2a490b4b776b98568871b69693fedf985c",
        html_url:
          "https://github.com/facebook/react/commit/f2841c2a490b4b776b98568871b69693fedf985c",
      },
    ],
  },
  {
    sha: "f2841c2a490b4b776b98568871b69693fedf985c",
    node_id:
      "C_kwDOAJy2KtoAKGYyODQxYzJhNDkwYjRiNzc2Yjk4NTY4ODcxYjY5NjkzZmVkZjk4NWM",
    commit: {
      author: {
        name: "Mike Vitousek",
        email: "mmvitousek@gmail.com",
        date: "2024-08-27T17:11:50Z",
      },
      committer: {
        name: "Mike Vitousek",
        email: "mmvitousek@gmail.com",
        date: "2024-08-27T17:11:50Z",
      },
      message:
        "[compiler] Fixture to demonstrate issue with returning object containing ref\n\nSummary:\nWe currently can return a ref from a hook but not an object containing a ref.\n\nghstack-source-id: 8b1de4991eb2731b7f758e685ba62d9f07d584b2\nPull Request resolved: https://github.com/facebook/react/pull/30820",
      tree: {
        sha: "6be8382540124c54b3d0b4fabe8b316a91d65c75",
        url: "https://api.github.com/repos/facebook/react/git/trees/6be8382540124c54b3d0b4fabe8b316a91d65c75",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/f2841c2a490b4b776b98568871b69693fedf985c",
      comment_count: 0,
      verification: {
        verified: false,
        reason: "unsigned",
        signature: null,
        payload: null,
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/f2841c2a490b4b776b98568871b69693fedf985c",
    html_url:
      "https://github.com/facebook/react/commit/f2841c2a490b4b776b98568871b69693fedf985c",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/f2841c2a490b4b776b98568871b69693fedf985c/comments",
    author: {
      login: "mvitousek",
      id: 1629813,
      node_id: "MDQ6VXNlcjE2Mjk4MTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/1629813?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mvitousek",
      html_url: "https://github.com/mvitousek",
      followers_url: "https://api.github.com/users/mvitousek/followers",
      following_url:
        "https://api.github.com/users/mvitousek/following{/other_user}",
      gists_url: "https://api.github.com/users/mvitousek/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mvitousek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mvitousek/subscriptions",
      organizations_url: "https://api.github.com/users/mvitousek/orgs",
      repos_url: "https://api.github.com/users/mvitousek/repos",
      events_url: "https://api.github.com/users/mvitousek/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mvitousek/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "mvitousek",
      id: 1629813,
      node_id: "MDQ6VXNlcjE2Mjk4MTM=",
      avatar_url: "https://avatars.githubusercontent.com/u/1629813?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/mvitousek",
      html_url: "https://github.com/mvitousek",
      followers_url: "https://api.github.com/users/mvitousek/followers",
      following_url:
        "https://api.github.com/users/mvitousek/following{/other_user}",
      gists_url: "https://api.github.com/users/mvitousek/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/mvitousek/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/mvitousek/subscriptions",
      organizations_url: "https://api.github.com/users/mvitousek/orgs",
      repos_url: "https://api.github.com/users/mvitousek/repos",
      events_url: "https://api.github.com/users/mvitousek/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/mvitousek/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
        url: "https://api.github.com/repos/facebook/react/commits/96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
        html_url:
          "https://github.com/facebook/react/commit/96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
      },
    ],
  },
  {
    sha: "96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
    node_id:
      "C_kwDOAJy2KtoAKDk2YWNhNWY0ZjNkN2ZiZTBjMTMzNTBmOTAwMzFkOGVjNGMwNjBjY2I",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-27T17:10:37Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-27T17:10:37Z",
      },
      message:
        "Spawn new task if we hit stack overflow (#30419)\n\nIf we see the \"Maximum call stack size exceeded\" error we know we've hit\r\nstack overflow. We can recover from this by spawning a new task and\r\ntrying again. Effectively a zero-cost trampoline in the normal case. The\r\nnew task will have a clean stack. If you have a lot of siblings at the\r\nsame depth that hits the limit you can end up hitting this once for each\r\nsibling but within that new sibling you're unlikely to hit this again.\r\nSo it's not too expensive.\r\n\r\nIf it errors again in the retryTask pass, the other error handling takes\r\nover which causes this to be able to still not infinitely stall. E.g.\r\nwhen the component itself throws an error like this.\r\n\r\nIt's still better to increase the stack limit for performance if you\r\nhave a really deep tree but it doesn't really hurt to be able to recover\r\nsince it's zero cost when it doesn't happen.\r\n\r\nWe could do the same thing for Flight. Those trees don't tend to be as\r\ndeep but could happen.",
      tree: {
        sha: "279da97ac2db213f1f09d7c67f177bbb68e9bac8",
        url: "https://api.github.com/repos/facebook/react/git/trees/279da97ac2db213f1f09d7c67f177bbb68e9bac8",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJmzgiNCRC1aQ7uu5UhlAAAgGkQAFL1/KZqsM5Q/pLg6je/uCP5\nWiagJQ2rvhfukcnSIWyl3EooWY5lW2UzGsEVFjCZw+sq2a9CkWzQH+s95zb7G9Vz\nWSR0oAZiaYYaHW4J4zGaeXyvvhuR0GKfCkGHyobEX5t7fRy+PGskQ8R1/rO0dCvQ\n/LHliiqWAH7nPfhKqhjM2LbG07aRhwuhOC16sUuAsYCc+fXBXjWBONGAeS2OA75v\niiLo1nZT5fPPhYUTCV7w1jsqN3rQT5avBJwmWanzc3spWXe1WhkGUwJyxJOxBKOw\n14w7ceev+QcMlk09kT4mxniUDOPtUa4vYj5UD5kkGaDeGlIhtjVhc9beIuGKRMf5\n6K2uIVhZN+3yFuGgArQgkyuyiZyG3K30TkzduJnlpxENq12gLE19r+PVEujzVhPy\n+wRtJX6UYKzfK3rWNlj0pMFyIEhdUL7KAZZrSFc03pztYamIprW8Hz7H0QMia2qH\nYEr7GtJRK7RJXsDp/pWmFvxftCGupQJYM0GxgQo04EJbNptPbtqDmAXWDm4792xX\nXOLVSIMOuF/1kUTPjrV4b/xM+Q6CyWHvpJA71jd3VusW8hp8+W85+OyZLZVIaxKh\necx+ghzsQlQFXc/jCvqzayP8shlUVzDzvtTebOoNVAQuC7h+ZftwsH62YlJwzZEg\nAW058RkVfHPBAYgaxFHW\n=/Vwd\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree 279da97ac2db213f1f09d7c67f177bbb68e9bac8\nparent f90a6bcc4c988f7524ce2be675b3257a530a51e9\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1724778637 -0400\ncommitter GitHub <noreply@github.com> 1724778637 -0400\n\nSpawn new task if we hit stack overflow (#30419)\n\nIf we see the \"Maximum call stack size exceeded\" error we know we've hit\r\nstack overflow. We can recover from this by spawning a new task and\r\ntrying again. Effectively a zero-cost trampoline in the normal case. The\r\nnew task will have a clean stack. If you have a lot of siblings at the\r\nsame depth that hits the limit you can end up hitting this once for each\r\nsibling but within that new sibling you're unlikely to hit this again.\r\nSo it's not too expensive.\r\n\r\nIf it errors again in the retryTask pass, the other error handling takes\r\nover which causes this to be able to still not infinitely stall. E.g.\r\nwhen the component itself throws an error like this.\r\n\r\nIt's still better to increase the stack limit for performance if you\r\nhave a really deep tree but it doesn't really hurt to be able to recover\r\nsince it's zero cost when it doesn't happen.\r\n\r\nWe could do the same thing for Flight. Those trees don't tend to be as\r\ndeep but could happen.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
    html_url:
      "https://github.com/facebook/react/commit/96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/96aca5f4f3d7fbe0c13350f90031d8ec4c060ccb/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "f90a6bcc4c988f7524ce2be675b3257a530a51e9",
        url: "https://api.github.com/repos/facebook/react/commits/f90a6bcc4c988f7524ce2be675b3257a530a51e9",
        html_url:
          "https://github.com/facebook/react/commit/f90a6bcc4c988f7524ce2be675b3257a530a51e9",
      },
    ],
  },
  {
    sha: "f90a6bcc4c988f7524ce2be675b3257a530a51e9",
    node_id:
      "C_kwDOAJy2KtoAKGY5MGE2YmNjNGM5ODhmNzUyNGNlMmJlNjc1YjMyNTdhNTMwYTUxZTk",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-27T16:05:47Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-27T16:05:47Z",
      },
      message:
        "[DevTools] Reconcile Fibers Against Previous Children Instances (#30822)\n\nThis loops over the remainingReconcilingChildren to find existing\r\nFiberInstances that match the updated Fiber. This is the same thing we\r\nalready do for virtual instances. This avoids the need for a\r\n`fiberToFiberInstanceMap`.\r\n\r\nThis loop is fast but there is a downside when the children set is very\r\nlarge and gets reordered with keys since we might have to loop over the\r\nset multiple times to get to the instances in the bottom. If that\r\nbecomes a problem we can optimize it the same way ReactChildFiber does\r\nwhich is to create a temporary Map only when the children don't line up\r\nproperly. That way everything except the first pass can use the Map but\r\nthere's no need to create it eagerly.\r\n\r\nNow that we have the loop we don't need the previousSibling field so we\r\ncan save some memory there.",
      tree: {
        sha: "d134ced0b3a337af2a0a0b9a371e15005dca7fdd",
        url: "https://api.github.com/repos/facebook/react/git/trees/d134ced0b3a337af2a0a0b9a371e15005dca7fdd",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/f90a6bcc4c988f7524ce2be675b3257a530a51e9",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJmzflbCRC1aQ7uu5UhlAAAlWIQACvUuI9ubN0lN96i2jOBY/Hn\nvm41UDbd1GaQk3vq8FjJHUZbZZRcPxn++LJzOUw+YVnYz4jNcwQ43EEOrng14pHz\ngI1JdNosQQOd83DTrUI/8GWiRAqMStVcO7sHTXut3c/OexAlpxe1bm+DaR45AGHe\nADRUs9NIvbNxriDHTKmd0WhFE8UVYr7va8PjF88RuB0UVFVq3XmeYMrVAhNZLvEQ\ntjKL/g7m0T2PageyRXuxUKsBZW67BSkW8+iU4/tHj97rS9rCEt02P/uxqFfyMUdB\nxdrZBFnA55yignct1690PQzPucVcRr+mKRnVdYQ1XrkHqTDlTTqTkJq44UPla2lo\ntjH2VGEZ6H7KlrI/udfTDfEd8JNG+DPYYTNP/w+8JqTuMwDLZuAI3BuNe7oPzvek\nN2g1M1K+g0XAhntm1At1R4flk0vj4goz57TgIBgvvpQzkaNx3XdcKJhh3N5wBtmY\nGbQzxm3Xl1rVB5MWgNHqIqP5wYvuxR9PAaWqwJ65mSePXf/2DZxPygTNFNe86Hx5\nOMxWFrxmLVR5B8gvuaKkGXh/pKVWhRfSIKzbmkvag5mtAN7aN7aAyAVK0D7aNMqT\nEvZyR7lRiIDABm5TE0k3Jn3kVzMuZkl5/T7yQzE/D6yS16CrA5YxnsWMuVs6Utcr\nWegMihgh1R/Pi+OR6fEx\n=ansX\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree d134ced0b3a337af2a0a0b9a371e15005dca7fdd\nparent 9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1724774747 -0400\ncommitter GitHub <noreply@github.com> 1724774747 -0400\n\n[DevTools] Reconcile Fibers Against Previous Children Instances (#30822)\n\nThis loops over the remainingReconcilingChildren to find existing\r\nFiberInstances that match the updated Fiber. This is the same thing we\r\nalready do for virtual instances. This avoids the need for a\r\n`fiberToFiberInstanceMap`.\r\n\r\nThis loop is fast but there is a downside when the children set is very\r\nlarge and gets reordered with keys since we might have to loop over the\r\nset multiple times to get to the instances in the bottom. If that\r\nbecomes a problem we can optimize it the same way ReactChildFiber does\r\nwhich is to create a temporary Map only when the children don't line up\r\nproperly. That way everything except the first pass can use the Map but\r\nthere's no need to create it eagerly.\r\n\r\nNow that we have the loop we don't need the previousSibling field so we\r\ncan save some memory there.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/f90a6bcc4c988f7524ce2be675b3257a530a51e9",
    html_url:
      "https://github.com/facebook/react/commit/f90a6bcc4c988f7524ce2be675b3257a530a51e9",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/f90a6bcc4c988f7524ce2be675b3257a530a51e9/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
        url: "https://api.github.com/repos/facebook/react/commits/9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
        html_url:
          "https://github.com/facebook/react/commit/9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
      },
    ],
  },
  {
    sha: "9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
    node_id:
      "C_kwDOAJy2KtoAKDk2OTBiOWFkNzQ5YzMwZWFiMTkwMGM5OWU3YzI1YTdlZDdlMWQ5Yjc",
    commit: {
      author: {
        name: "Sebastian Markbåge",
        email: "sebastian@calyptus.eu",
        date: "2024-08-27T16:05:24Z",
      },
      committer: {
        name: "GitHub",
        email: "noreply@github.com",
        date: "2024-08-27T16:05:24Z",
      },
      message:
        "[DevTools] Remove findCurrentFiberUsingSlowPathByFiberInstance (#30818)\n\nWe always track the last committed Fiber on `FiberInstance.data`.\r\n\r\n\r\nhttps://github.com/facebook/react/blob/dcae56f8b72f625d8affe5729ca9991b31a492ac/packages/react-devtools-shared/src/backend/fiber/renderer.js#L3068\r\n\r\nSo we can now remove this complex slow path to get the current fiber.",
      tree: {
        sha: "acab5c6d40957db456dacd3d6c9cd533e5b5f277",
        url: "https://api.github.com/repos/facebook/react/git/trees/acab5c6d40957db456dacd3d6c9cd533e5b5f277",
      },
      url: "https://api.github.com/repos/facebook/react/git/commits/9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
      comment_count: 0,
      verification: {
        verified: true,
        reason: "valid",
        signature:
          "-----BEGIN PGP SIGNATURE-----\n\nwsFcBAABCAAQBQJmzflECRC1aQ7uu5UhlAAA94sQACfhXrzY8D3L8woQlwTl/KFw\ncItltEYajG1lrPDYD2cwGrKsXsEJCfAY0K87lkpwnP4I5lKQgaUEJGYET2IHH46r\nYzavQiT4Fd28dqgge3rpoS6TCi6EnmR0/5oiCppWhAECWXSWssep0SAypQvcp44z\nFh+htDBdZaHJEXok4Fw8Lv7ktXjrDQMrkbqWrPLwOEI2o9Rq4G3WOK3wekBPyWBj\nXxunLagYVShLlqJUJFOfXjszk/9z13cprbR3jHBc2ucuixHdh1UavLLxmv/yka2S\n60q02/hcKVIJMv4foBdFgxlgEs+gj95dstrpsKWHeQkf8s/4UUZGI/b7jkGn/z09\n6ffd67na1yvhhL3xltCVmHSqPiCuX5EbFIZR1eReyLLlabbKIVz5fubImIeRtVE4\njLfQWv4bePD8lHWufaDSge36gRcrreUREwXecsTLj3GnM3lMH9TCz0nf6CV9Dy+s\nxudAoDcyceRDMyaQ1pZZ4IucOy9oGWKndhjMVmmo6WWzd2ZOIsxNdtvx8L2X8hfJ\nPKcsCR96JTP8pLhj2RbGIhiFUV564xvh1F/FPiZk9LQvdNXNA5xuWUOOMBH1o1g1\ndwYgZRb7FBrRBi9oG8fOBLu+eoYDGug7SeWGRZJWDSg8zzE11q0HoIwqu+zeQCuJ\nMA74BqDwBzEXNwpbIoiY\n=40MG\n-----END PGP SIGNATURE-----\n",
        payload:
          "tree acab5c6d40957db456dacd3d6c9cd533e5b5f277\nparent 1a8f92a8699e79966e65841fcb9110bba4c3df7f\nauthor Sebastian Markbåge <sebastian@calyptus.eu> 1724774724 -0400\ncommitter GitHub <noreply@github.com> 1724774724 -0400\n\n[DevTools] Remove findCurrentFiberUsingSlowPathByFiberInstance (#30818)\n\nWe always track the last committed Fiber on `FiberInstance.data`.\r\n\r\n\r\nhttps://github.com/facebook/react/blob/dcae56f8b72f625d8affe5729ca9991b31a492ac/packages/react-devtools-shared/src/backend/fiber/renderer.js#L3068\r\n\r\nSo we can now remove this complex slow path to get the current fiber.",
      },
    },
    url: "https://api.github.com/repos/facebook/react/commits/9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
    html_url:
      "https://github.com/facebook/react/commit/9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7",
    comments_url:
      "https://api.github.com/repos/facebook/react/commits/9690b9ad749c30eab1900c99e7c25a7ed7e1d9b7/comments",
    author: {
      login: "sebmarkbage",
      id: 63648,
      node_id: "MDQ6VXNlcjYzNjQ4",
      avatar_url: "https://avatars.githubusercontent.com/u/63648?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/sebmarkbage",
      html_url: "https://github.com/sebmarkbage",
      followers_url: "https://api.github.com/users/sebmarkbage/followers",
      following_url:
        "https://api.github.com/users/sebmarkbage/following{/other_user}",
      gists_url: "https://api.github.com/users/sebmarkbage/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/sebmarkbage/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/sebmarkbage/subscriptions",
      organizations_url: "https://api.github.com/users/sebmarkbage/orgs",
      repos_url: "https://api.github.com/users/sebmarkbage/repos",
      events_url: "https://api.github.com/users/sebmarkbage/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/sebmarkbage/received_events",
      type: "User",
      site_admin: false,
    },
    committer: {
      login: "web-flow",
      id: 19864447,
      node_id: "MDQ6VXNlcjE5ODY0NDQ3",
      avatar_url: "https://avatars.githubusercontent.com/u/19864447?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/web-flow",
      html_url: "https://github.com/web-flow",
      followers_url: "https://api.github.com/users/web-flow/followers",
      following_url:
        "https://api.github.com/users/web-flow/following{/other_user}",
      gists_url: "https://api.github.com/users/web-flow/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/web-flow/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/web-flow/subscriptions",
      organizations_url: "https://api.github.com/users/web-flow/orgs",
      repos_url: "https://api.github.com/users/web-flow/repos",
      events_url: "https://api.github.com/users/web-flow/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/web-flow/received_events",
      type: "User",
      site_admin: false,
    },
    parents: [
      {
        sha: "1a8f92a8699e79966e65841fcb9110bba4c3df7f",
        url: "https://api.github.com/repos/facebook/react/commits/1a8f92a8699e79966e65841fcb9110bba4c3df7f",
        html_url:
          "https://github.com/facebook/react/commit/1a8f92a8699e79966e65841fcb9110bba4c3df7f",
      },
    ],
  },
];
