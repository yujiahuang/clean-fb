function insertCss() {
  var css = `
    /* Wildcard Hide */
    .hidden-by-extension {
      display: none !important;
    }

    /* Stories */

    div[role="tablist"] {
      display: none !important;
    }

    [data-pagelet="Stories"] {
      display: none !important;
    }
    [aria-label="限時動態"] {
      display: none !important;
    }

    /* Tab Items */
    [role="navigation"] > ul > li:has([aria-label="Watch"]) {
      display: none;
    }

    [role="navigation"] > ul > li:has(a[href="/marketplace/?ref=app_tab"]) {
      display: none;
    }

    [role="navigation"] > ul > li:has(a[href="/gaming/?ref=games_tab"]) {
      display: none;
    }

    /* Video Chat */
    [data-pagelet="VideoChatHomeUnit"] {
      display: none !important;
    }
    [aria-label="video chats that people can join"] {
      display: none !important;
    }

    /* Paragraph Spacing */
    [data-ad-preview="message"] .qzhwtbm6 {
      margin-bottom: 20px !important;
    }
    [data-ad-preview="message"] .o9v6fnle:not(:last-child) {
      margin-bottom: 20px !important;
    }
    [data-ad-preview="message"] .o9v6fnle:last-child {
      margin-bottom: 8px !important;
    }

    /* Potential Friends */
    [aria-label="你可能認識的朋友"] {
      display: none;
    }
    div:has([aria-label="你可能認識的朋友"]) {
      display: none;
    }

    /* Friend Invites */
    [role="complementary"] > div > div > div > div > div > div:has(a[href="/friends/"]) {
      display: none;
    }

    /* Small Font (TODO) */

    .blah.o0t2es00 {
      font-size: .9375rem !important;
    }
    .blah.f530mmz5 {
      line-height: 1.3333 !important;
    }
    .blah.b1v8xokw {
      font-weight: normal !important;
    }

  `;
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  head.appendChild(style);
}

function hideFriendInvite() {
  var rightElements = document.querySelectorAll('[role="complementary"] > div > div > div > div > div > div');
  var mark = document.querySelectorAll('a[href="/friends/"]')[0];
  rightElements.forEach((e) => {
    if (e.contains(mark)) {
      e.classList.add("hidden-by-extension");
    }
  });
}

function hidePotentialFriend() {
  var pfElement = document.querySelectorAll('[aria-label="你可能認識的朋友"]')[0];
  pfElement.parentElement.parentElement.parentElement.classList.add("hidden-by-extension");
}

function hideTabItems() {
  var tabItems = document.querySelectorAll('[role="navigation"] > ul > li');
  var marks = [
    document.querySelectorAll('[role="navigation"] [aria-label="Watch"]')[0],
    document.querySelectorAll('[role="navigation"] a[href="/marketplace/?ref=app_tab"]')[0],
    document.querySelectorAll('[role="navigation"] a[href="/gaming/?ref=games_tab"]')[0],
  ];
  tabItems.forEach((e) => {
    for (var mark of marks) {
      if (e.contains(mark)) {
        e.classList.add("hidden-by-extension");
      }
    }
  });
}

insertCss();
// hideFriendInvite();
// hidePotentialFriend();
// hideTabItems();
