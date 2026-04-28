export const VALID_LOCALES = new Set(["en-US", "fr", "de", "es", "pt-BR", "ko"]);
export const DEFAULT_LOCALE = "en-US";

const TRANSLATIONS = {
  "en-US": {
    conditions: {
      Grappled: { past: "grappled", verb: "grapples" },
      Restrained: { past: "restrained", verb: "restrains" },
      Prone: { past: "knocked prone", verb: "knocks", suffix: "prone" },
      Poisoned: { past: "poisoned", verb: "poisons" },
      Stunned: { past: "stunned", verb: "stuns" },
      Blinded: { past: "blinded", verb: "blinds" },
      Charmed: { past: "charmed", verb: "charms" },
      Frightened: { past: "frightened", verb: "frightens" },
      Incapacitated: { past: "incapacitated", verb: "incapacitates" },
      Invisible: { past: "invisible", verb: "makes", suffix: "invisible" },
      Paralyzed: { past: "paralyzed", verb: "paralyzes" },
      Petrified: { past: "petrified", verb: "petrifies" },
      Unconscious: {
        past: "unconscious",
        verb: "knocks",
        suffix: "unconscious",
      },
      Spell: { past: "affected by a spell", verb: "casts a spell on" },
      Ability: { past: "affected by an ability", verb: "uses an ability on" },
      Advantage: {
        past: "has advantage",
        verb: "grants advantage to",
        noBy: true,
      },
      Disadvantage: {
        past: "has disadvantage",
        verb: "imposes disadvantage on",
        noBy: true,
      },
    },
    condNames: {
      Grappled: "Grappled",
      Restrained: "Restrained",
      Prone: "Prone",
      Poisoned: "Poisoned",
      Stunned: "Stunned",
      Blinded: "Blinded",
      Charmed: "Charmed",
      Frightened: "Frightened",
      Incapacitated: "Incapacitated",
      Invisible: "Invisible",
      Paralyzed: "Paralyzed",
      Petrified: "Petrified",
      Unconscious: "Unconscious",
      Spell: "Spell",
      Ability: "Ability",
      Advantage: "Advantage",
      Disadvantage: "Disadvantage",
      Other: "Other",
    },
    templates: {
      display: {
        custom: "{emoji} {target} affected by {effect} ({source})",
        advantage: "{emoji} {source} has advantage against {target}{subject}",
        disadvantage:
          "{emoji} {source} has disadvantage against {target}{subject}",
        noBy: "{emoji} {target} {past} ({source})",
        standard: "{emoji} {target} {past} by {source}",
      },
      apply: {
        custom: "{source} applies {effect} to {target}.",
        advantage: "{source} has advantage against {target}{subject}.",
        disadvantage: "{source} has disadvantage against {target}{subject}.",
        withSuffix: "{source} {verb} {target} {suffix}.",
        standard: "{source} {verb} {target}.",
      },
      remove: {
        custom: "{target} is no longer affected by {effect}.",
        advantage:
          "{source} no longer has advantage against {target}{subject}.",
        disadvantage:
          "{source} no longer has disadvantage against {target}{subject}.",
        noBy: "{target} no longer {past}.",
        standard: "{target} is no longer {past} by {source}.",
      },
    },
    ui: {
      wizard: {
        selectCondition: "Select Condition",
        selectSource: "Select Source Token",
        selectTarget: "Select Target Token",
        selectSubject: "Select Subject",
        selectDuration: "Select Duration",
        confirmTargetTitle: "Confirm Target List",
        applyEffectTitle: "Apply {condition} Effect",
        noTokens: "No named tokens found on the active page.",
        confirmIntro: "The following tokens will receive the condition:",
        confirmBtn: "Confirm target list",
        enterDetails: "Enter effect details",
        noneBtn: "None",
        subjectDesc: "Select who or what delivers the effect.",
        sourceDesc:
          "Select the creature that is creating / generating the condition or effect.",
        targetDesc:
          "Select the creature that will receive the condition or effect.",
        otherText: "Other condition text",
        effectDetails: "{condition} details",
      },
      col: {
        players: "Players",
        npcs: "NPCs",
        conditions: "Conditions",
        customEffects: "Custom Effects",
        permanentTurnEnd: "Permanent / Turn End",
        rounds: "Rounds",
        command: "Command",
        result: "Result",
        field: "Field",
        value: "Value",
        option: "Option",
        condition: "Condition",
        marker: "Marker",
        item: "Item",
        removed: "Removed",
        details: "Details",
        description: "Description",
        scenario: "Scenario",
      },
      dur: {
        untilRemoved: "Until removed",
        endOfTargetTurn: "End of target next turn",
        endOfSourceTurn: "End of source next turn",
        round1: "1 round",
        round2: "2 rounds",
        round3: "3 rounds",
        round10: "10 rounds",
        custom: "Custom",
        customPrompt: "Number of rounds",
        untilRemovedDisplay: "Until removed",
        turnsRemaining: "{n} tracked turn end(s) remaining",
      },
      btn: {
        openWizard: "Open Wizard",
        openMultiTarget: "Open Multi-Target Wizard",
        openRemovalList: "Open Removal List",
        showConfig: "Show Config",
        runCleanup: "Run Cleanup",
        reinstallMacro: "Reinstall Macro",
        reinstallHandout: "Reinstall Handout",
        showHelp: "Show Help",
      },
      title: {
        menu: "Menu",
        removalMenu: "Condition Tracker removal",
        config: "Config",
        configTracker: "Condition Tracker config",
        help: "Help",
        applied: "Applied",
        removed: "Condition Removed",
        cleanup: "Cleanup Complete",
        macroReinstalled: "Macro Reinstalled",
        handoutReinstalled: "Handout Reinstalled",
        warning: "Warning",
        error: "Error",
        turnOrder: "Turn Order",
        noConditions: "No Conditions",
        tokenMoved: "Token Moved",
        markedDead: "Marked as Dead",
        zeroHp: "{name} — 0 HP",
        moveToken: "{name} — Move Token?",
        scriptReady: "Script Ready",
      },
      heading: {
        quickActions: "Quick Actions",
        settings: "Settings",
        markerMappings: "Marker Mappings",
        result: "Result",
        info: "Info",
        commandOptions: "Command Options",
        promptUi: "Prompt UI",
        examples: "Examples",
        summary: "Summary",
      },
      msg: {
        noActive: "No active conditions are tracked.",
        configReset: "Configuration reset to mod defaults.",
        unknownConfig:
          "Unknown config option. Use --config to view supported settings.",
        macroReinstalled:
          "The {wizard} and {multiTarget} macros have been reinstalled for all current GM players.",
        handoutReinstalled: "The help handout {handout} has been reinstalled.",
        duplicate:
          "That exact source, subject, target, condition, and custom text is already active.",
        noTargets: "No target tokens specified for multi-target apply.",
        noSelection:
          "Select at least one token on the board before using --multi-target.",
        invalidIds: "No valid token ids found in the current selection.",
        reSelectTokens:
          "None of the originally-selected tokens could be found. Re-select tokens and try again.",
        conditionNotFound: "Condition id was not found.",
        gmOnly: "Condition Tracker commands are GM-only.",
        commandFailed:
          "The command could not be completed safely. Check the API console for details.",
        sourceTokenNotFound: "Source token could not be found.",
        targetTokenNotFound: "Target token could not be found.",
        subjectTokenNotFound: "Subject token could not be found.",
        invalidCondition:
          "Condition must be one of the predefined conditions or Other.",
        subjectOnlyCustom:
          "--subject is only valid for Spell, Ability, Advantage, Disadvantage, and Other.",
        subjectBypassInvalid:
          "--subjectPromptBypass expects true or false when a value is provided.",
        customDetailsRequired:
          "{condition} details are required. Use --other to provide them.",
        markerConfigFormat:
          "Marker config format is: --config marker Grappled=grab",
        markerPredefinedRequired:
          "Marker configuration requires a predefined condition name.",
        markerNameRequired:
          "Marker configuration requires a non-empty marker name.",
        markerSet: "{condition} marker set to {marker}.",
        healthBarSet: "Health bar set to {bar}.",
        boolSet: "{key} set to {value}.",
        expectedBoolean: "Expected true or false.",
        invalidHealthBar:
          "Health bar must be bar1_value, bar2_value, or bar3_value.",
        markersDisabled: "Markers are disabled.",
        noMarkerConfigured: "No marker is configured for this condition.",
        markerApplied: "Marker applied: {marker}",
        markerPresent: "Marker already present: {marker}",
        langSet: "Language set to {locale}.",
        invalidLocale: "Invalid locale. Supported locales: {locales}.",
        otherDurationRequiresRounds:
          "Other duration requires a numeric round count, for example --duration 5 rounds.",
        invalidDuration:
          "Duration must be Until removed, an end-of-turn option, or a positive round count.",
        zeroHpNoConditions:
          "{name} has reached 0 HP and has no active conditions.",
        zeroHpConditions:
          "{name} has reached 0 HP. Choose conditions to remove:",
        removeAllBtn: "Remove All Conditions for {name}",
        markIncapacitated: "Mark as Incapacitated",
        removeFromTurnOrder: "Remove from Turn Order",
        alreadyIncapacitated: "{name} is already Incapacitated.",
        tokenRemovedFromTurn: "{name} has been removed from the turn order.",
        tokenNotInTurn: "{name} was not found in the turn order.",
        moveTokenPrompt:
          "Move {name} to the map layer so it remains visible but won't interfere with other tokens?",
        moveTokenBtn: "Move {name} to Map Layer",
        tokenMoved: "{name} has been moved to the map layer.",
        tokenNotFound: "Token not found.",
        noActiveConditions: "{name} has no active conditions to remove.",
        deadNoConditions:
          "{name} was marked as dead. No conditions were active.",
        scriptReady: "{name} is active and you are using version {version}.",
        reachedZeroHp: "{name} reached 0 HP",
        manuallyRemoved: "it was manually removed",
        durationExpired: "its duration expired",
        markedAsDead: "{name} was marked as dead",
      },
      removal: {
        conditionField: "Condition",
        reasonField: "Reason",
        turnRowField: "Turn Tracker row",
        markerField: "Marker",
        notConfigured: "Not configured",
        markerRemoved: "Removed ({marker})",
        markerRetained: "Retained ({marker})",
        rowRemoved: "Removed",
        rowMissing: "Already missing",
        manualReason: "Manual removal",
      },
      cleanup: {
        orphaned: "Orphaned condition entries",
        stale: "Stale condition entries",
        orphanedRows: "Orphaned Turn Tracker rows",
        unusedMarkers: "Unused markers",
      },
      apply: {
        turnAppended:
          "Target was not in turn order; condition row was appended.",
        turnInserted: "Condition row inserted below target token.",
      },
    },
    handout: {
      versionLabel: "Version",
      subtitle: "D&D 5e Status Effect Manager",
      footerNote:
        "This handout is automatically created and updated each time the script loads.",
      overview: {
        heading: "Overview",
        body: "Condition Tracker manages D&D 5e status conditions and custom effects as labelled rows in the Roll20 Turn Tracker. Apply conditions to tokens, track durations by initiative order, and automatically remove expired effects when a turn ends. All commands are GM-only and can be triggered from chat or via the installed macros.",
      },
      quickStart: {
        heading: "Quick Start",
        colCommand: "Command",
        colDesc: "Description",
        rows: [
          [
            "!condition-tracker --prompt",
            "Step-by-step wizard — pick condition, tokens & duration interactively. Also available as the ConditionTrackerWizard macro.",
          ],
          [
            "!condition-tracker --multi-target",
            "Apply one condition to several tokens simultaneously. Also available as the ConditionTrackerMultiTarget macro.",
          ],
          [
            "!condition-tracker --menu",
            "Open the main management menu with buttons to apply, review, or remove conditions.",
          ],
        ],
      },
      commandsRef: {
        heading: "Commands Reference",
        colFlag: "Flag",
        colDesc: "Description",
        rows: [
          ["--prompt", "Interactive step-by-step wizard UI"],
          [
            "--multi-target",
            "Apply a condition to multiple target tokens at once",
          ],
          ["--menu", "Show main menu (add remove for removal menu)"],
          [
            "--source X --target Y --condition Z",
            "Apply a condition directly without the wizard",
          ],
          [
            "--duration &lt;value&gt;",
            "Duration for a direct apply (e.g. 2 rounds)",
          ],
          [
            "--other &lt;text&gt;",
            "Custom text for Spell / Ability / Other effect types",
          ],
          [
            "--remove &lt;condition-id&gt;",
            "Remove a specific condition by its unique ID",
          ],
          [
            "--config &lt;option&gt; &lt;value&gt;",
            "Adjust configuration settings (see Config section below)",
          ],
          [
            "--prompt --subjectPromptBypass true|false",
            "Override subjectPromptBypass for this command only (also supports --subject-prompt-bypass)",
          ],
          [
            "--cleanup",
            "Reconcile state — remove orphaned conditions and Turn Tracker rows",
          ],
          ["--reinstall-macro", "Recreate or update the GM macros"],
          [
            "--reinstall-handout",
            "Recreate or update the localized help handout",
          ],
          [
            "--lang &lt;locale&gt;",
            "Output this command's messages in an additional locale (bilingual mode)",
          ],
          ["--help", "Show a brief help card in chat"],
        ],
      },
      standardConditions: {
        heading: "Standard Conditions (D&amp;D 5e)",
        colCondition: "Condition",
      },
      customEffects: {
        heading: "Custom Effect Types",
        colType: "Type",
        colNotes: "Notes",
        rows: [
          [
            "🔮 Spell",
            "Track a named spell effect — you will be prompted for the spell name",
          ],
          [
            "🎯 Ability",
            "Track a named class or racial ability — you will be prompted for the ability name",
          ],
          [
            "🍀 Advantage",
            "Record advantage granted from one token to another; grouped with the source in initiative",
          ],
          [
            "⬇️ Disadvantage",
            "Record disadvantage imposed; grouped with the source in initiative",
          ],
          [
            "📝 Other",
            "Freeform custom label — you will be prompted for a description",
          ],
        ],
      },
      durationOptions: {
        heading: "Duration Options",
        intro:
          "The remaining count is shown in the Turn Tracker pr column and decrements when the anchor token's turn ends.",
        colOption: "Option",
        colBehaviour: "Behaviour",
        rows: [
          [
            "Until removed",
            "Permanent — must be removed manually via the menu or --remove",
          ],
          [
            "End of target's next turn",
            "Expires when the target token's next turn ends in initiative",
          ],
          [
            "End of source's next turn",
            "Expires when the source token's next turn ends in initiative",
          ],
          [
            "1 / 2 / 3 / 10 rounds",
            "Fixed countdown; one decrement per anchor-token turn-end",
          ],
        ],
      },
      configuration: {
        heading: "Configuration",
        intro:
          "Use !condition-tracker --config &lt;option&gt; &lt;value&gt; or the Config button in the main menu.",
        colOption: "Option",
        colValues: "Values",
        colDesc: "Description",
        rows: [
          [
            "useMarkers",
            "true / false",
            "Apply Roll20 status markers to tokens when a condition is added",
          ],
          [
            "useIcons",
            "true / false",
            "Show short icon codes (e.g. [G]) instead of emoji in Turn Tracker rows",
          ],
          [
            "subjectPromptBypass",
            "true / false",
            "Skip the optional subject-token step for Spell / Ability / Other effects",
          ],
          [
            "healthBar",
            "bar1_value / bar2_value / bar3_value",
            "Token bar to watch; when it drops to 0 the GM is prompted to clean up conditions",
          ],
          [
            "language",
            "en-US / fr / de / es / pt-BR / ko",
            "Output language for chat messages and the help handout",
          ],
          [
            "markers.&lt;Condition&gt;",
            "&lt;marker name&gt;",
            "Override the status marker used for a specific condition (e.g. markers.Grappled grab)",
          ],
        ],
      },
      defaultMarkers: {
        heading: "Default Status Markers",
        colCondition: "Condition",
        colMarker: "Marker Name",
      },
    },
  },

  fr: {
    conditions: {
      Grappled: { past: "agrippé", verb: "agrippe" },
      Restrained: { past: "entravé", verb: "entrave" },
      Prone: { past: "mis à terre", verb: "met", suffix: "à terre" },
      Poisoned: { past: "empoisonné", verb: "empoisonne" },
      Stunned: { past: "étourdi", verb: "étourdit" },
      Blinded: { past: "aveuglé", verb: "aveugle" },
      Charmed: { past: "charmé", verb: "charme" },
      Frightened: { past: "effrayé", verb: "effraie" },
      Incapacitated: { past: "incapacité", verb: "incapacite" },
      Invisible: { past: "invisible", verb: "rend", suffix: "invisible" },
      Paralyzed: { past: "paralysé", verb: "paralyse" },
      Petrified: { past: "pétrifié", verb: "pétrifie" },
      Unconscious: { past: "inconscient", verb: "rend", suffix: "inconscient" },
      Spell: { past: "affecté par un sort", verb: "lance un sort sur" },
      Ability: {
        past: "affecté par une capacité",
        verb: "utilise une capacité sur",
      },
      Advantage: {
        past: "a l’avantage",
        verb: "accorde l’avantage à",
        noBy: true,
      },
      Disadvantage: {
        past: "a le désavantage",
        verb: "impose le désavantage à",
        noBy: true,
      },
    },
    condNames: {
      Grappled: "Agrippé",
      Restrained: "Entravé",
      Prone: "À terre",
      Poisoned: "Empoisonné",
      Stunned: "Étourdi",
      Blinded: "Aveuglé",
      Charmed: "Charmé",
      Frightened: "Effrayé",
      Incapacitated: "Incapacité",
      Invisible: "Invisible",
      Paralyzed: "Paralysé",
      Petrified: "Pétrifié",
      Unconscious: "Inconscient",
      Spell: "Sort",
      Ability: "Capacité",
      Advantage: "Avantage",
      Disadvantage: "Désavantage",
      Other: "Autre",
    },
    templates: {
      display: {
        custom: "{emoji} {target} affecté par {effect} ({source})",
        advantage: "{emoji} {source} a l’avantage contre {target}{subject}",
        disadvantage:
          "{emoji} {source} a le désavantage contre {target}{subject}",
        noBy: "{emoji} {target} {past} ({source})",
        standard: "{emoji} {target} {past} par {source}",
      },
      apply: {
        custom: "{source} applique {effect} à {target}.",
        advantage: "{source} a l’avantage contre {target}{subject}.",
        disadvantage: "{source} a le désavantage contre {target}{subject}.",
        withSuffix: "{source} {verb} {target} {suffix}.",
        standard: "{source} {verb} {target}.",
      },
      remove: {
        custom: "{target} n’est plus affecté par {effect}.",
        advantage: "{source} n’a plus l’avantage contre {target}{subject}.",
        disadvantage:
          "{source} n’a plus le désavantage contre {target}{subject}.",
        noBy: "{target} n’est plus {past}.",
        standard: "{target} n’est plus {past} par {source}.",
      },
    },
    ui: {
      wizard: {
        selectCondition: "Sélectionner une condition",
        selectSource: "Sélectionner le jeton source",
        selectTarget: "Sélectionner le jeton cible",
        selectSubject: "Sélectionner le sujet",
        selectDuration: "Sélectionner la durée",
        confirmTargetTitle: "Confirmer la liste de cibles",
        applyEffectTitle: "Appliquer l’effet {condition}",
        noTokens: "Aucun jeton nommé trouvé sur la page active.",
        confirmIntro: "Les jetons suivants recevront la condition :",
        confirmBtn: "Confirmer la liste de cibles",
        enterDetails: "Saisir les détails de l’effet",
        noneBtn: "Aucun",
        subjectDesc: "Sélectionnez qui ou quoi délivre l’effet.",
        sourceDesc:
          "Sélectionnez la créature qui crée ou génère la condition ou l’effet.",
        targetDesc:
          "Sélectionnez la créature qui recevra la condition ou l’effet.",
        otherText: "Texte de condition personnalisé",
        effectDetails: "Détails de {condition}",
      },
      col: {
        players: "Joueurs",
        npcs: "PNJ",
        conditions: "Conditions",
        customEffects: "Effets personnalisés",
        permanentTurnEnd: "Permanent / Fin de tour",
        rounds: "Rounds",
        command: "Commande",
        result: "Résultat",
        field: "Champ",
        value: "Valeur",
        option: "Option",
        condition: "Condition",
        marker: "Marqueur",
        item: "Élément",
        removed: "Supprimé",
        details: "Détails",
        description: "Description",
        scenario: "Scénario",
      },
      dur: {
        untilRemoved: "Jusqu’à suppression",
        endOfTargetTurn: "Fin du prochain tour de la cible",
        endOfSourceTurn: "Fin du prochain tour de la source",
        round1: "1 round",
        round2: "2 rounds",
        round3: "3 rounds",
        round10: "10 rounds",
        custom: "Personnalisé",
        customPrompt: "Nombre de rounds",
        untilRemovedDisplay: "Jusqu’à suppression",
        turnsRemaining: "{n} fin(s) de tour restante(s)",
      },
      btn: {
        openWizard: "Ouvrir l’assistant",
        openMultiTarget: "Ouvrir l’assistant multi-cibles",
        openRemovalList: "Ouvrir la liste de suppression",
        showConfig: "Afficher la configuration",
        runCleanup: "Lancer le nettoyage",
        reinstallMacro: "Réinstaller la macro",
        reinstallHandout: "Réinstaller le livret",
        showHelp: "Afficher l’aide",
      },
      title: {
        menu: "Menu",
        removalMenu: "Suppression — Condition Tracker",
        config: "Configuration",
        configTracker: "Configuration — Condition Tracker",
        help: "Aide",
        applied: "Appliqué",
        removed: "Condition supprimée",
        cleanup: "Nettoyage terminé",
        macroReinstalled: "Macro réinstallée",
        handoutReinstalled: "Livret réinstallé",
        warning: "Avertissement",
        error: "Erreur",
        turnOrder: "Ordre d’initiative",
        noConditions: "Aucune condition",
        tokenMoved: "Jeton déplacé",
        markedDead: "Marqué comme mort",
        zeroHp: "{name} — 0 PV",
        moveToken: "{name} — Déplacer le jeton ?",
        scriptReady: "Script prêt",
      },
      heading: {
        quickActions: "Actions rapides",
        settings: "Paramètres",
        markerMappings: "Correspondances des marqueurs",
        result: "Résultat",
        info: "Informations",
        commandOptions: "Options de commande",
        promptUi: "Interface de l’assistant",
        examples: "Exemples",
        summary: "Résumé",
      },
      msg: {
        noActive: "Aucune condition active n’est suivie.",
        configReset: "Configuration réinitialisée aux valeurs par défaut.",
        unknownConfig:
          "Option de configuration inconnue. Utilisez --config pour voir les paramètres disponibles.",
        macroReinstalled:
          "Les macros {wizard} et {multiTarget} ont été réinstallées pour tous les MJ actifs.",
        handoutReinstalled: "Le livret d’aide {handout} a été réinstallé.",
        duplicate:
          "Cette combinaison source, sujet, cible, condition et texte personnalisé est déjà active.",
        noTargets:
          "Aucun jeton cible spécifié pour l’application multi-cibles.",
        noSelection:
          "Sélectionnez au moins un jeton sur le plateau avant d’utiliser --multi-target.",
        invalidIds:
          "Aucun identifiant de jeton valide trouvé dans la sélection actuelle.",
        reSelectTokens:
          "Aucun des jetons initialement sélectionnés n’a pu être trouvé. Veuillez resélectionner les jetons et réessayer.",
        conditionNotFound: "Identifiant de condition introuvable.",
        gmOnly: "Les commandes de Condition Tracker sont réservées au MJ.",
        commandFailed:
          "La commande n’a pas pu être exécutée. Vérifiez la console API pour plus de détails.",
        sourceTokenNotFound: "Le jeton source est introuvable.",
        targetTokenNotFound: "Le jeton cible est introuvable.",
        subjectTokenNotFound: "Le jeton sujet est introuvable.",
        invalidCondition:
          "La condition doit être une condition prédéfinie ou Autre.",
        subjectOnlyCustom:
          "--subject est uniquement valide pour Sort, Capacité, Avantage, Désavantage et Autre.",
        subjectBypassInvalid:
          "--subjectPromptBypass attend true ou false si une valeur est fournie.",
        customDetailsRequired:
          "Les détails de {condition} sont requis. Utilisez --other pour les fournir.",
        markerConfigFormat:
          "Format de configuration du marqueur : --config marker Grappled=grab",
        markerPredefinedRequired:
          "La configuration du marqueur requiert un nom de condition prédéfini.",
        markerNameRequired:
          "La configuration du marqueur requiert un nom de marqueur non vide.",
        markerSet: "Marqueur de {condition} défini sur {marker}.",
        healthBarSet: "Barre de santé définie sur {bar}.",
        boolSet: "{key} défini sur {value}.",
        expectedBoolean: "true ou false est attendu.",
        invalidHealthBar:
          "La barre de santé doit être bar1_value, bar2_value ou bar3_value.",
        markersDisabled: "Les marqueurs sont désactivés.",
        noMarkerConfigured:
          "Aucun marqueur n’est configuré pour cette condition.",
        markerApplied: "Marqueur appliqué : {marker}",
        markerPresent: "Marqueur déjà présent : {marker}",
        langSet: "Langue définie sur {locale}.",
        invalidLocale: "Locale invalide. Locales disponibles : {locales}.",
        otherDurationRequiresRounds:
          "La durée Autre requiert un nombre de rounds, par exemple --duration 5 rounds.",
        invalidDuration:
          "La durée doit être Jusqu’à suppression, une option de fin de tour ou un nombre de rounds positif.",
        zeroHpNoConditions:
          "{name} a atteint 0 PV et n’a aucune condition active.",
        zeroHpConditions:
          "{name} a atteint 0 PV. Choisissez les conditions à supprimer :",
        removeAllBtn: "Supprimer toutes les conditions de {name}",
        markIncapacitated: "Marquer comme Incapacité",
        removeFromTurnOrder: "Retirer de l’ordre d’initiative",
        alreadyIncapacitated: "{name} est déjà Incapacité.",
        tokenRemovedFromTurn: "{name} a été retiré de l’ordre d’initiative.",
        tokenNotInTurn: "{name} n’a pas été trouvé dans l’ordre d’initiative.",
        moveTokenPrompt:
          "Déplacer {name} vers le calque carte pour qu’il reste visible sans interférer avec les autres jetons ?",
        moveTokenBtn: "Déplacer {name} vers le calque carte",
        tokenMoved: "{name} a été déplacé vers le calque carte.",
        tokenNotFound: "Jeton introuvable.",
        noActiveConditions: "{name} n’a aucune condition active à supprimer.",
        deadNoConditions:
          "{name} a été marqué comme mort. Aucune condition n’était active.",
        scriptReady: "{name} est actif et vous utilisez la version {version}.",
        reachedZeroHp: "{name} a atteint 0 PV",
        manuallyRemoved: "suppression manuelle",
        durationExpired: "sa durée a expiré",
        markedAsDead: "{name} a été marqué comme mort",
      },
      removal: {
        conditionField: "Condition",
        reasonField: "Raison",
        turnRowField: "Ligne d’initiative",
        markerField: "Marqueur",
        notConfigured: "Non configuré",
        markerRemoved: "Supprimé ({marker})",
        markerRetained: "Conservé ({marker})",
        rowRemoved: "Supprimé",
        rowMissing: "Déjà absent",
        manualReason: "Suppression manuelle",
      },
      cleanup: {
        orphaned: "Entrées de condition orphelines",
        stale: "Entrées de condition obsolètes",
        orphanedRows: "Lignes d’initiative orphelines",
        unusedMarkers: "Marqueurs inutilisés",
      },
      apply: {
        turnAppended:
          "La cible n’était pas dans l’ordre d’initiative ; la ligne de condition a été ajoutée.",
        turnInserted: "Ligne de condition insérée sous le jeton cible.",
      },
    },
    handout: {
      versionLabel: "Version",
      subtitle: "Gestionnaire d’états D&D 5e",
      footerNote:
        "Ce livret est créé et mis à jour automatiquement à chaque chargement du script.",
      overview: {
        heading: "Présentation",
        body: "Condition Tracker gère les conditions de statut D&D 5e et les effets personnalisés sous forme de lignes dans le suivi d’initiative Roll20. Appliquez des conditions aux jetons, suivez les durées par ordre d’initiative et supprimez automatiquement les effets expirés à la fin d’un tour. Toutes les commandes sont réservées au MJ.",
      },
      quickStart: {
        heading: "Démarrage rapide",
        colCommand: "Commande",
        colDesc: "Description",
        rows: [
          [
            "!condition-tracker --prompt",
            "Assistant pas à pas — choisissez condition, jetons et durée de façon interactive. Disponible aussi via la macro ConditionTrackerWizard.",
          ],
          [
            "!condition-tracker --multi-target",
            "Appliquer une condition à plusieurs jetons simultanément. Disponible aussi via la macro ConditionTrackerMultiTarget.",
          ],
          [
            "!condition-tracker --menu",
            "Ouvrir le menu principal pour appliquer, consulter ou supprimer des conditions.",
          ],
        ],
      },
      commandsRef: {
        heading: "Référence des commandes",
        colFlag: "Option",
        colDesc: "Description",
        rows: [
          ["--prompt", "Interface de l’assistant pas à pas"],
          [
            "--multi-target",
            "Appliquer une condition à plusieurs jetons cibles",
          ],
          [
            "--menu",
            "Afficher le menu principal (ajouter remove pour le menu de suppression)",
          ],
          [
            "--source X --target Y --condition Z",
            "Appliquer une condition directement sans l’assistant",
          ],
          [
            "--duration &lt;valeur&gt;",
            "Durée pour une application directe (ex. 2 rounds)",
          ],
          [
            "--other &lt;texte&gt;",
            "Texte personnalisé pour les types Sort / Capacité / Autre",
          ],
          [
            "--remove &lt;id-condition&gt;",
            "Supprimer une condition spécifique par son identifiant unique",
          ],
          [
            "--config &lt;option&gt; &lt;valeur&gt;",
            "Modifier les paramètres de configuration",
          ],
          [
            "--prompt --subjectPromptBypass true|false",
            "Remplacer subjectPromptBypass pour cette commande uniquement (prend aussi en charge --subject-prompt-bypass)",
          ],
          [
            "--cleanup",
            "Nettoyer l’état — supprimer les conditions et lignes orphelines",
          ],
          ["--reinstall-macro", "Recréer ou mettre à jour les macros MJ"],
          [
            "--reinstall-handout",
            "Recréer ou mettre à jour le livret d’aide localisé",
          ],
          [
            "--lang &lt;locale&gt;",
            "Afficher les messages de cette commande dans une locale supplémentaire (mode bilingue)",
          ],
          ["--help", "Afficher une carte d’aide rapide dans le chat"],
        ],
      },
      standardConditions: {
        heading: "Conditions standard (D&D 5e)",
        colCondition: "Condition",
      },
      customEffects: {
        heading: "Types d’effets personnalisés",
        colType: "Type",
        colNotes: "Notes",
        rows: [
          [
            "🔮 Sort",
            "Suivre un effet de sort nommé — vous serez invité à saisir le nom du sort",
          ],
          [
            "🎯 Capacité",
            "Suivre une capacité de classe ou raciale — vous serez invité à saisir le nom",
          ],
          [
            "🍀 Avantage",
            "Enregistrer un avantage accordé d’un jeton à un autre ; groupé avec la source dans l’initiative",
          ],
          [
            "⬇️ Désavantage",
            "Enregistrer un désavantage imposé ; groupé avec la source dans l’initiative",
          ],
          [
            "📝 Autre",
            "Étiquette personnalisée libre — vous serez invité à saisir une description",
          ],
        ],
      },
      durationOptions: {
        heading: "Options de durée",
        intro:
          "Le compteur restant est affiché dans la colonne pr du suivi d’initiative et décrémente à la fin du tour du jeton ancre.",
        colOption: "Option",
        colBehaviour: "Comportement",
        rows: [
          [
            "Jusqu’à suppression",
            "Permanent — doit être supprimé manuellement via le menu ou --remove",
          ],
          [
            "Fin du prochain tour de la cible",
            "Expire à la fin du prochain tour du jeton cible dans l’initiative",
          ],
          [
            "Fin du prochain tour de la source",
            "Expire à la fin du prochain tour du jeton source dans l’initiative",
          ],
          [
            "1 / 2 / 3 / 10 rounds",
            "Compte à rebours fixe ; un décrément par fin de tour du jeton ancre",
          ],
        ],
      },
      configuration: {
        heading: "Configuration",
        intro:
          "Utilisez !condition-tracker --config &lt;option&gt; &lt;valeur&gt; ou le bouton Config dans le menu principal.",
        colOption: "Option",
        colValues: "Valeurs",
        colDesc: "Description",
        rows: [
          [
            "useMarkers",
            "true / false",
            "Appliquer des marqueurs de statut Roll20 aux jetons lors de l’ajout d’une condition",
          ],
          [
            "useIcons",
            "true / false",
            "Afficher des codes d’icônes courts (ex. [G]) dans les lignes du suivi d’initiative",
          ],
          [
            "subjectPromptBypass",
            "true / false",
            "Ignorer l’étape sujet optionnelle pour les effets Sort / Capacité / Autre",
          ],
          [
            "healthBar",
            "bar1_value / bar2_value / bar3_value",
            "Barre à surveiller ; quand elle atteint 0 le MJ est invité à nettoyer les conditions",
          ],
          [
            "language",
            "en-US / fr / de / es / pt-BR / ko",
            "Langue des messages de chat et du livret d’aide",
          ],
          [
            "markers.&lt;Condition&gt;",
            "&lt;nom du marqueur&gt;",
            "Remplacer le marqueur utilisé pour une condition spécifique (ex. markers.Grappled grab)",
          ],
        ],
      },
      defaultMarkers: {
        heading: "Marqueurs de statut par défaut",
        colCondition: "Condition",
        colMarker: "Nom du marqueur",
      },
    },
  },

  de: {
    conditions: {
      Grappled: { past: "gepackt", verb: "packt" },
      Restrained: { past: "gefesselt", verb: "fesselt" },
      Prone: { past: "niedergeworfen", verb: "wirft", suffix: "nieder" },
      Poisoned: { past: "vergiftet", verb: "vergiftet" },
      Stunned: { past: "betäubt", verb: "betäubt" },
      Blinded: { past: "geblendet", verb: "blendet" },
      Charmed: { past: "bezaubert", verb: "bezaubert" },
      Frightened: { past: "verängstigt", verb: "verängstigt" },
      Incapacitated: { past: "kampfunfähig", verb: "macht kampfunfähig" },
      Invisible: { past: "unsichtbar", verb: "macht", suffix: "unsichtbar" },
      Paralyzed: { past: "gelähmt", verb: "lähmt" },
      Petrified: { past: "versteinert", verb: "versteinert" },
      Unconscious: { past: "bewusstlos", verb: "macht", suffix: "bewusstlos" },
      Spell: {
        past: "von einem Zauber betroffen",
        verb: "wirkt einen Zauber auf",
      },
      Ability: {
        past: "von einer Fähigkeit betroffen",
        verb: "setzt eine Fähigkeit gegen",
      },
      Advantage: {
        past: "hat Vorteil",
        verb: "gewährt Vorteil für",
        noBy: true,
      },
      Disadvantage: {
        past: "hat Nachteil",
        verb: "verhängt Nachteil gegen",
        noBy: true,
      },
    },
    condNames: {
      Grappled: "Gepackt",
      Restrained: "Gefesselt",
      Prone: "Liegend",
      Poisoned: "Vergiftet",
      Stunned: "Betäubt",
      Blinded: "Geblendet",
      Charmed: "Bezaubert",
      Frightened: "Verängstigt",
      Incapacitated: "Kampfunfähig",
      Invisible: "Unsichtbar",
      Paralyzed: "Gelähmt",
      Petrified: "Versteinert",
      Unconscious: "Bewusstlos",
      Spell: "Zauber",
      Ability: "Fähigkeit",
      Advantage: "Vorteil",
      Disadvantage: "Nachteil",
      Other: "Sonstiges",
    },
    templates: {
      display: {
        custom: "{emoji} {target} betroffen von {effect} ({source})",
        advantage: "{emoji} {source} hat Vorteil gegen {target}{subject}",
        disadvantage: "{emoji} {source} hat Nachteil gegen {target}{subject}",
        noBy: "{emoji} {target} {past} ({source})",
        standard: "{emoji} {target} {past} durch {source}",
      },
      apply: {
        custom: "{source} wendet {effect} auf {target} an.",
        advantage: "{source} hat Vorteil gegen {target}{subject}.",
        disadvantage: "{source} hat Nachteil gegen {target}{subject}.",
        withSuffix: "{source} {verb} {target} {suffix}.",
        standard: "{source} {verb} {target}.",
      },
      remove: {
        custom: "{target} ist nicht mehr von {effect} betroffen.",
        advantage: "{source} hat keinen Vorteil mehr gegen {target}{subject}.",
        disadvantage:
          "{source} hat keinen Nachteil mehr gegen {target}{subject}.",
        noBy: "{target} ist nicht mehr {past}.",
        standard: "{target} ist nicht mehr {past} durch {source}.",
      },
    },
    ui: {
      wizard: {
        selectCondition: "Zustand wählen",
        selectSource: "Quell-Token wählen",
        selectTarget: "Ziel-Token wählen",
        selectSubject: "Subjekt wählen",
        selectDuration: "Dauer wählen",
        reinstallHandout: "Handout neu installieren",
        confirmTargetTitle: "Zielliste bestätigen",
        applyEffectTitle: "Effekt {condition} anwenden",
        noTokens: "Keine benannten Tokens auf der aktiven Seite gefunden.",
        confirmIntro: "Die folgenden Tokens erhalten die Bedingung:",
        confirmBtn: "Zielliste bestätigen",
        enterDetails: "Effektdetails eingeben",
        noneBtn: "Keines",
        subjectDesc: "Wähle aus, wer oder was den Effekt auslöst.",
        sourceDesc:
          "Wähle das Wesen, das die Bedingung oder den Effekt erzeugt.",
        targetDesc:
          "Wähle das Wesen, das die Bedingung oder den Effekt erhält.",
        otherText: "Benutzerdefinierter Bedingungstext",
        effectDetails: "Details zu {condition}",
      },
      col: {
        players: "Spieler",
        npcs: "NSC",
        conditions: "Zustände",
        customEffects: "Benutzerdefinierte Effekte",
        permanentTurnEnd: "Permanent / Rundende",
        rounds: "Runden",
        command: "Befehl",
        result: "Ergebnis",
        field: "Feld",
        value: "Wert",
        option: "Option",
        condition: "Zustand",
        marker: "Marker",
        item: "Eintrag",
        removed: "Entfernt",
        details: "Details",
        description: "Beschreibung",
        scenario: "Szenario",
      },
      dur: {
        untilRemoved: "Bis zur Entfernung",
        endOfTargetTurn: "Ende des nächsten Zugs des Ziels",
        endOfSourceTurn: "Ende des nächsten Zugs der Quelle",
        round1: "1 Runde",
        round2: "2 Runden",
        round3: "3 Runden",
        round10: "10 Runden",
        custom: "Benutzerdefiniert",
        customPrompt: "Anzahl der Runden",
        untilRemovedDisplay: "Bis zur Entfernung",
        turnsRemaining: "{n} verbleibende Zugende(n)",
      },
      btn: {
        openWizard: "Assistent öffnen",
        openMultiTarget: "Mehrfachziel-Assistent öffnen",
        openRemovalList: "Entfernungsliste öffnen",
        showConfig: "Konfiguration anzeigen",
        runCleanup: "Bereinigung starten",
        reinstallMacro: "Makro neu installieren",
        showHelp: "Hilfe anzeigen",
      },
      title: {
        menu: "Menü",
        removalMenu: "Condition Tracker — Entfernen",
        config: "Konfiguration",
        configTracker: "Condition Tracker — Konfiguration",
        help: "Hilfe",
        applied: "Angewendet",
        removed: "Zustand entfernt",
        cleanup: "Bereinigung abgeschlossen",
        macroReinstalled: "Makro neu installiert",
        handoutReinstalled: "Handout neu installiert",
        warning: "Warnung",
        error: "Fehler",
        turnOrder: "Rundenreihenfolge",
        noConditions: "Keine Zustände",
        tokenMoved: "Token verschoben",
        markedDead: "Als tot markiert",
        zeroHp: "{name} — 0 TP",
        moveToken: "{name} — Token verschieben?",
        scriptReady: "Skript bereit",
      },
      heading: {
        quickActions: "Schnellaktionen",
        settings: "Einstellungen",
        markerMappings: "Markerzuordnungen",
        result: "Ergebnis",
        info: "Informationen",
        commandOptions: "Befehlsoptionen",
        promptUi: "Assistent-Oberfläche",
        examples: "Beispiele",
        summary: "Zusammenfassung",
      },
      msg: {
        noActive: "Es werden keine aktiven Zustände verfolgt.",
        configReset: "Konfiguration auf Standardwerte zurückgesetzt.",
        unknownConfig:
          "Unbekannte Konfigurationsoption. Verwende --config, um unterstützte Einstellungen anzuzeigen.",
        macroReinstalled:
          "Die Makros {wizard} und {multiTarget} wurden für alle aktuellen GM-Spieler neu installiert.",
        handoutReinstalled:
          "Das Hilfe-Handout {handout} wurde neu installiert.",
        duplicate:
          "Diese exakte Kombination aus Quelle, Subjekt, Ziel, Zustand und benutzerdefiniertem Text ist bereits aktiv.",
        noTargets: "Keine Ziel-Tokens für die Mehrfachanwendung angegeben.",
        noSelection:
          "Wähle mindestens einen Token auf dem Spielfeld aus, bevor du --multi-target verwendest.",
        invalidIds:
          "Keine gültigen Token-IDs in der aktuellen Auswahl gefunden.",
        reSelectTokens:
          "Keiner der ursprünglich ausgewählten Tokens konnte gefunden werden. Tokens neu auswählen und erneut versuchen.",
        conditionNotFound: "Zustands-ID nicht gefunden.",
        gmOnly: "Condition Tracker-Befehle sind nur für GMs verfügbar.",
        commandFailed:
          "Der Befehl konnte nicht sicher ausgeführt werden. Bitte API-Konsole prüfen.",
        sourceTokenNotFound: "Quell-Token konnte nicht gefunden werden.",
        targetTokenNotFound: "Ziel-Token konnte nicht gefunden werden.",
        subjectTokenNotFound: "Subjekt-Token konnte nicht gefunden werden.",
        invalidCondition:
          "Der Zustand muss einer der vordefinierten Zustände oder Sonstiges sein.",
        subjectOnlyCustom:
          "--subject ist nur für Zauber, Fähigkeit, Vorteil, Nachteil und Sonstiges gültig.",
        subjectBypassInvalid:
          "--subjectPromptBypass erwartet true oder false, wenn ein Wert angegeben wird.",
        customDetailsRequired:
          "Details für {condition} sind erforderlich. Verwende --other, um sie anzugeben.",
        markerConfigFormat:
          "Marker-Konfigurationsformat: --config marker Grappled=grab",
        markerPredefinedRequired:
          "Die Marker-Konfiguration erfordert einen vordefinierten Zustandsnamen.",
        markerNameRequired:
          "Die Marker-Konfiguration erfordert einen nicht-leeren Markernamen.",
        markerSet: "Marker für {condition} auf {marker} gesetzt.",
        healthBarSet: "Gesundheitsleiste auf {bar} gesetzt.",
        boolSet: "{key} auf {value} gesetzt.",
        expectedBoolean: "true oder false erwartet.",
        invalidHealthBar:
          "Die Gesundheitsleiste muss bar1_value, bar2_value oder bar3_value sein.",
        markersDisabled: "Marker sind deaktiviert.",
        noMarkerConfigured: "Für diesen Zustand ist kein Marker konfiguriert.",
        markerApplied: "Marker angewendet: {marker}",
        markerPresent: "Marker bereits vorhanden: {marker}",
        langSet: "Sprache auf {locale} gesetzt.",
        invalidLocale: "Ungültige Locale. Unterstützte Locales: {locales}.",
        otherDurationRequiresRounds:
          "Die Dauer Sonstiges erfordert eine numerische Rundenzahl, zum Beispiel --duration 5 rounds.",
        invalidDuration:
          "Die Dauer muss Bis zur Entfernung, eine Zugende-Option oder eine positive Rundenzahl sein.",
        zeroHpNoConditions:
          "{name} hat 0 TP erreicht und hat keine aktiven Zustände.",
        zeroHpConditions:
          "{name} hat 0 TP erreicht. Zustände zum Entfernen auswählen:",
        removeAllBtn: "Alle Zustände für {name} entfernen",
        markIncapacitated: "Als kampfunfähig markieren",
        removeFromTurnOrder: "Aus Rundenreihenfolge entfernen",
        alreadyIncapacitated: "{name} ist bereits kampfunfähig.",
        tokenRemovedFromTurn:
          "{name} wurde aus der Rundenreihenfolge entfernt.",
        tokenNotInTurn: "{name} wurde nicht in der Rundenreihenfolge gefunden.",
        moveTokenPrompt:
          "{name} auf die Kartenebene verschieben, damit es sichtbar bleibt, aber andere Tokens nicht stört?",
        moveTokenBtn: "{name} auf Kartenebene verschieben",
        tokenMoved: "{name} wurde auf die Kartenebene verschoben.",
        tokenNotFound: "Token nicht gefunden.",
        noActiveConditions: "{name} hat keine aktiven Zustände zum Entfernen.",
        deadNoConditions:
          "{name} wurde als tot markiert. Keine Zustände waren aktiv.",
        scriptReady: "{name} ist aktiv und du verwendest Version {version}.",
        reachedZeroHp: "{name} hat 0 TP erreicht",
        manuallyRemoved: "manuell entfernt",
        durationExpired: "Dauer abgelaufen",
        markedAsDead: "{name} wurde als tot markiert",
      },
      removal: {
        conditionField: "Zustand",
        reasonField: "Grund",
        turnRowField: "Rundenreihenfolge-Zeile",
        markerField: "Marker",
        notConfigured: "Nicht konfiguriert",
        markerRemoved: "Entfernt ({marker})",
        markerRetained: "Beibehalten ({marker})",
        rowRemoved: "Entfernt",
        rowMissing: "Bereits fehlend",
        manualReason: "Manuelle Entfernung",
      },
      cleanup: {
        orphaned: "Verwaiste Zustandseinträge",
        stale: "Verältete Zustandseinträge",
        orphanedRows: "Verwaiste Rundenreihenfolge-Zeilen",
        unusedMarkers: "Unbenutzte Marker",
      },
      apply: {
        turnAppended:
          "Ziel war nicht in der Rundenreihenfolge; Zustandszeile wurde angehängt.",
        turnInserted: "Zustandszeile unterhalb des Ziel-Tokens eingefügt.",
      },
    },
    handout: {
      versionLabel: "Version",
      subtitle: "D&D 5e Statuseffekt-Verwaltung",
      footerNote:
        "Dieses Handout wird bei jedem Skriptstart automatisch erstellt und aktualisiert.",
      overview: {
        heading: "Übersicht",
        body: "Condition Tracker verwaltet D&D 5e-Statuszustände und benutzerdefinierte Effekte als beschriftete Zeilen im Roll20-Rundenvählungstracker. Wende Zustände auf Tokens an, verfolge Dauern nach Initiativereihenfolge und entferne abgelaufene Effekte am Zugende automatisch. Alle Befehle sind GM-exklusiv.",
      },
      quickStart: {
        heading: "Schnellstart",
        colCommand: "Befehl",
        colDesc: "Beschreibung",
        rows: [
          [
            "!condition-tracker --prompt",
            "Schritt-für-Schritt-Assistent — Zustand, Tokens und Dauer interaktiv auswählen. Auch als Makro ConditionTrackerWizard verfügbar.",
          ],
          [
            "!condition-tracker --multi-target",
            "Einen Zustand gleichzeitig auf mehrere Tokens anwenden. Auch als Makro ConditionTrackerMultiTarget verfügbar.",
          ],
          [
            "!condition-tracker --menu",
            "Hauptmenü öffnen, um Zustände anzuwenden, anzusehen oder zu entfernen.",
          ],
        ],
      },
      commandsRef: {
        heading: "Befehlsreferenz",
        colFlag: "Option",
        colDesc: "Beschreibung",
        rows: [
          ["--prompt", "Schritt-für-Schritt-Assistent-Oberfläche"],
          ["--multi-target", "Zustand auf mehrere Ziel-Tokens anwenden"],
          [
            "--menu",
            "Hauptmenü anzeigen (remove für Entfernungsmenü hinzufügen)",
          ],
          [
            "--source X --target Y --condition Z",
            "Zustand direkt ohne Assistenten anwenden",
          ],
          [
            "--duration &lt;Wert&gt;",
            "Dauer für direkte Anwendung (z. B. 2 rounds)",
          ],
          [
            "--other &lt;Text&gt;",
            "Benutzerdefinierter Text für Zauber / Fähigkeit / Sonstiges",
          ],
          [
            "--remove &lt;Zustands-ID&gt;",
            "Bestimmten Zustand per eindeutiger ID entfernen",
          ],
          [
            "--config &lt;Option&gt; &lt;Wert&gt;",
            "Konfigurationseinstellungen anpassen",
          ],
          [
            "--prompt --subjectPromptBypass true|false",
            "subjectPromptBypass nur für diesen Befehl überschreiben (unterstützt auch --subject-prompt-bypass)",
          ],
          [
            "--cleanup",
            "Status bereinigen — verwaiste Zustände und Zeilen entfernen",
          ],
          ["--reinstall-macro", "GM-Makros neu erstellen oder aktualisieren"],
          [
            "--reinstall-handout",
            "Lokalisiertes Hilfe-Handout neu erstellen oder aktualisieren",
          ],
          [
            "--lang &lt;Locale&gt;",
            "Nachrichten dieses Befehls in einer zusätzlichen Locale ausgeben (zweisprachiger Modus)",
          ],
          ["--help", "Kurze Hilfekarte im Chat anzeigen"],
        ],
      },
      standardConditions: {
        heading: "Standardzustände (D&D 5e)",
        colCondition: "Zustand",
      },
      customEffects: {
        heading: "Benutzerdefinierte Effekttypen",
        colType: "Typ",
        colNotes: "Hinweise",
        rows: [
          [
            "🔮 Zauber",
            "Benannten Zaubereffekt verfolgen — du wirst nach dem Zaubernamen gefragt",
          ],
          [
            "🎯 Fähigkeit",
            "Benannte Klassen- oder Rassafähigkeit verfolgen — du wirst nach dem Namen gefragt",
          ],
          [
            "🍀 Vorteil",
            "Vorteil von einem Token auf einen anderen aufzeichnen; in der Initiative mit der Quelle gruppiert",
          ],
          [
            "⬇️ Nachteil",
            "Nachteil aufzeichnen; in der Initiative mit der Quelle gruppiert",
          ],
          [
            "📝 Sonstiges",
            "Freies benutzerdefiniertes Etikett — du wirst nach einer Beschreibung gefragt",
          ],
        ],
      },
      durationOptions: {
        heading: "Daueroptionen",
        intro:
          "Die verbleibende Anzahl wird in der pr-Spalte des Rundentracker angezeigt und verringert sich, wenn der Ankerzug des Tokens endet.",
        colOption: "Option",
        colBehaviour: "Verhalten",
        rows: [
          [
            "Bis zur Entfernung",
            "Dauerhaft — muss manuell über das Menü oder --remove entfernt werden",
          ],
          [
            "Ende des nächsten Zugs des Ziels",
            "Verfällt am Ende des nächsten Zugs des Ziel-Tokens",
          ],
          [
            "Ende des nächsten Zugs der Quelle",
            "Verfällt am Ende des nächsten Zugs des Quell-Tokens",
          ],
          [
            "1 / 2 / 3 / 10 Runden",
            "Fester Countdown; ein Dekrement pro Zugende des Ankertokens",
          ],
        ],
      },
      configuration: {
        heading: "Konfiguration",
        intro:
          "Verwende !condition-tracker --config &lt;Option&gt; &lt;Wert&gt; oder die Schaltfläche Konfiguration im Hauptmenü.",
        colOption: "Option",
        colValues: "Werte",
        colDesc: "Beschreibung",
        rows: [
          [
            "useMarkers",
            "true / false",
            "Roll20-Statusmarker auf Tokens anwenden, wenn ein Zustand hinzugefügt wird",
          ],
          [
            "useIcons",
            "true / false",
            "Kurze Symbolcodes (z. B. [G]) statt Emojis in Rundentracker-Zeilen anzeigen",
          ],
          [
            "subjectPromptBypass",
            "true / false",
            "Den optionalen Subjektschritt für Zauber / Fähigkeit / Sonstiges überspringen",
          ],
          [
            "healthBar",
            "bar1_value / bar2_value / bar3_value",
            "Zu überwachende Leiste; wenn sie auf 0 fällt, wird der GM zur Bereinigung aufgefordert",
          ],
          [
            "language",
            "en-US / fr / de / es / pt-BR / ko",
            "Ausgabesprache für Chat-Nachrichten und das Hilfe-Handout",
          ],
          [
            "markers.&lt;Zustand&gt;",
            "&lt;Markername&gt;",
            "Den Marker für einen bestimmten Zustand überschreiben (z. B. markers.Grappled grab)",
          ],
        ],
      },
      defaultMarkers: {
        heading: "Standard-Statusmarker",
        colCondition: "Zustand",
        colMarker: "Markername",
      },
    },
  },

  es: {
    conditions: {
      Grappled: { past: "aferrado", verb: "aferra" },
      Restrained: { past: "restringido", verb: "restringe" },
      Prone: { past: "derribado", verb: "derriba" },
      Poisoned: { past: "envenenado", verb: "envenena" },
      Stunned: { past: "aturdido", verb: "aturde" },
      Blinded: { past: "cegado", verb: "ciega" },
      Charmed: { past: "encantado", verb: "encanta" },
      Frightened: { past: "asustado", verb: "asusta" },
      Incapacitated: { past: "incapacitado", verb: "incapacita" },
      Invisible: { past: "invisible", verb: "vuelve", suffix: "invisible" },
      Paralyzed: { past: "paralizado", verb: "paraliza" },
      Petrified: { past: "petrificado", verb: "petrifica" },
      Unconscious: {
        past: "inconsciente",
        verb: "deja",
        suffix: "inconsciente",
      },
      Spell: {
        past: "afectado por un conjuro",
        verb: "lanza un conjuro sobre",
      },
      Ability: {
        past: "afectado por una habilidad",
        verb: "usa una habilidad en",
      },
      Advantage: {
        past: "tiene ventaja",
        verb: "otorga ventaja a",
        noBy: true,
      },
      Disadvantage: {
        past: "tiene desventaja",
        verb: "impone desventaja en",
        noBy: true,
      },
    },
    condNames: {
      Grappled: "Aferrado",
      Restrained: "Restringido",
      Prone: "Derribado",
      Poisoned: "Envenenado",
      Stunned: "Aturdido",
      Blinded: "Cegado",
      Charmed: "Encantado",
      Frightened: "Asustado",
      Incapacitated: "Incapacitado",
      Invisible: "Invisible",
      Paralyzed: "Paralizado",
      Petrified: "Petrificado",
      Unconscious: "Inconsciente",
      Spell: "Conjuro",
      Ability: "Habilidad",
      Advantage: "Ventaja",
      Disadvantage: "Desventaja",
      Other: "Otro",
    },
    templates: {
      display: {
        custom: "{emoji} {target} afectado por {effect} ({source})",
        advantage: "{emoji} {source} tiene ventaja contra {target}{subject}",
        disadvantage:
          "{emoji} {source} tiene desventaja contra {target}{subject}",
        noBy: "{emoji} {target} {past} ({source})",
        standard: "{emoji} {target} {past} por {source}",
      },
      apply: {
        custom: "{source} aplica {effect} a {target}.",
        advantage: "{source} tiene ventaja contra {target}{subject}.",
        disadvantage: "{source} tiene desventaja contra {target}{subject}.",
        withSuffix: "{source} {verb} {target} {suffix}.",
        standard: "{source} {verb} {target}.",
      },
      remove: {
        custom: "{target} ya no está afectado por {effect}.",
        advantage: "{source} ya no tiene ventaja contra {target}{subject}.",
        disadvantage:
          "{source} ya no tiene desventaja contra {target}{subject}.",
        noBy: "{target} ya no está {past}.",
        standard: "{target} ya no está {past} por {source}.",
      },
    },
    ui: {
      wizard: {
        selectCondition: "Seleccionar condición",
        selectSource: "Seleccionar ficha de origen",
        selectTarget: "Seleccionar ficha objetivo",
        selectSubject: "Seleccionar sujeto",
        selectDuration: "Seleccionar duración",
        confirmTargetTitle: "Confirmar lista de objetivos",
        applyEffectTitle: "Aplicar efecto {condition}",
        noTokens: "No se encontraron fichas con nombre en la página activa.",
        confirmIntro: "Las siguientes fichas recibirán la condición:",
        confirmBtn: "Confirmar lista de objetivos",
        enterDetails: "Introducir detalles del efecto",
        noneBtn: "Ninguno",
        subjectDesc: "Selecciona quién o qué aplica el efecto.",
        sourceDesc:
          "Selecciona la criatura que crea o genera la condición o efecto.",
        targetDesc:
          "Selecciona la criatura que recibirá la condición o efecto.",
        otherText: "Texto de condición personalizada",
        effectDetails: "Detalles de {condition}",
      },
      col: {
        players: "Jugadores",
        npcs: "PNJ",
        conditions: "Condiciones",
        customEffects: "Efectos personalizados",
        permanentTurnEnd: "Permanente / Fin de turno",
        rounds: "Rondas",
        command: "Comando",
        result: "Resultado",
        field: "Campo",
        value: "Valor",
        option: "Opción",
        condition: "Condición",
        marker: "Marcador",
        item: "Elemento",
        removed: "Eliminado",
        details: "Detalles",
        description: "Descripción",
        scenario: "Escenario",
      },
      dur: {
        untilRemoved: "Hasta retirar",
        endOfTargetTurn: "Fin del próximo turno del objetivo",
        endOfSourceTurn: "Fin del próximo turno de la fuente",
        round1: "1 ronda",
        round2: "2 rondas",
        round3: "3 rondas",
        round10: "10 rondas",
        custom: "Personalizado",
        customPrompt: "Número de rondas",
        untilRemovedDisplay: "Hasta retirar",
        turnsRemaining: "{n} fin(es) de turno restante(s)",
      },
      btn: {
        openWizard: "Abrir asistente",
        openMultiTarget: "Abrir asistente multiobjetivo",
        openRemovalList: "Abrir lista de eliminación",
        showConfig: "Mostrar configuración",
        runCleanup: "Ejecutar limpieza",
        reinstallMacro: "Reinstalar macro",
        reinstallHandout: "Reinstalar folleto",
        showHelp: "Mostrar ayuda",
      },
      title: {
        menu: "Menú",
        removalMenu: "Eliminación — Condition Tracker",
        config: "Configuración",
        configTracker: "Configuración — Condition Tracker",
        help: "Ayuda",
        applied: "Aplicado",
        removed: "Condición eliminada",
        cleanup: "Limpieza completada",
        macroReinstalled: "Macro reinstalada",
        handoutReinstalled: "Folleto reinstalado",
        warning: "Advertencia",
        error: "Error",
        turnOrder: "Orden de iniciativa",
        noConditions: "Sin condiciones",
        tokenMoved: "Ficha movida",
        markedDead: "Marcado como muerto",
        zeroHp: "{name} — 0 PV",
        moveToken: "{name} — ¿Mover ficha?",
        scriptReady: "Script listo",
      },
      heading: {
        quickActions: "Acciones rápidas",
        settings: "Ajustes",
        markerMappings: "Asignación de marcadores",
        result: "Resultado",
        info: "Información",
        commandOptions: "Opciones de comando",
        promptUi: "Interfaz del asistente",
        examples: "Ejemplos",
        summary: "Resumen",
      },
      msg: {
        noActive: "No se están rastreando condiciones activas.",
        configReset:
          "Configuración restablecida a los valores predeterminados.",
        unknownConfig:
          "Opción de configuración desconocida. Usa --config para ver los ajustes disponibles.",
        macroReinstalled:
          "Las macros {wizard} y {multiTarget} se han reinstalado para todos los GM actuales.",
        handoutReinstalled: "El folleto de ayuda {handout} se reinstaló.",
        duplicate:
          "Esa combinación exacta de fuente, sujeto, objetivo, condición y texto personalizado ya está activa.",
        noTargets:
          "No se especificaron fichas objetivo para la aplicación múltiple.",
        noSelection:
          "Selecciona al menos una ficha en el tablero antes de usar --multi-target.",
        invalidIds:
          "No se encontraron identificadores de ficha válidos en la selección actual.",
        reSelectTokens:
          "No se encontró ninguna de las fichas seleccionadas originalmente. Vuelve a seleccionarlas e inténtalo de nuevo.",
        conditionNotFound: "No se encontró el identificador de condición.",
        gmOnly: "Los comandos de Condition Tracker son solo para el GM.",
        commandFailed:
          "El comando no pudo completarse de forma segura. Revisa la consola de la API.",
        sourceTokenNotFound: "No se encontró la ficha de origen.",
        targetTokenNotFound: "No se encontró la ficha objetivo.",
        subjectTokenNotFound: "No se encontró la ficha del sujeto.",
        invalidCondition:
          "La condición debe ser una de las predefinidas u Otro.",
        subjectOnlyCustom:
          "--subject solo es válido para Conjuro, Habilidad, Ventaja, Desventaja y Otro.",
        subjectBypassInvalid:
          "--subjectPromptBypass espera true o false cuando se proporciona un valor.",
        customDetailsRequired:
          "Se requieren los detalles de {condition}. Usa --other para proporcionarlos.",
        markerConfigFormat:
          "Formato de configuración del marcador: --config marker Grappled=grab",
        markerPredefinedRequired:
          "La configuración del marcador requiere un nombre de condición predefinido.",
        markerNameRequired:
          "La configuración del marcador requiere un nombre de marcador no vacío.",
        markerSet: "Marcador de {condition} establecido en {marker}.",
        healthBarSet: "Barra de salud establecida en {bar}.",
        boolSet: "{key} establecido en {value}.",
        expectedBoolean: "Se esperaba true o false.",
        invalidHealthBar:
          "La barra de salud debe ser bar1_value, bar2_value o bar3_value.",
        markersDisabled: "Los marcadores están desactivados.",
        noMarkerConfigured:
          "No hay ningún marcador configurado para esta condición.",
        markerApplied: "Marcador aplicado: {marker}",
        markerPresent: "Marcador ya presente: {marker}",
        langSet: "Idioma establecido en {locale}.",
        invalidLocale:
          "Configuración regional no válida. Locales admitidas: {locales}.",
        otherDurationRequiresRounds:
          "La duración Otro requiere un número de rondas, por ejemplo --duration 5 rounds.",
        invalidDuration:
          "La duración debe ser Hasta retirar, una opción de fin de turno o un número positivo de rondas.",
        zeroHpNoConditions:
          "{name} ha llegado a 0 PV y no tiene condiciones activas.",
        zeroHpConditions:
          "{name} ha llegado a 0 PV. Elige las condiciones a eliminar:",
        removeAllBtn: "Eliminar todas las condiciones de {name}",
        markIncapacitated: "Marcar como incapacitado",
        removeFromTurnOrder: "Eliminar del orden de iniciativa",
        alreadyIncapacitated: "{name} ya está incapacitado.",
        tokenRemovedFromTurn:
          "{name} ha sido eliminado del orden de iniciativa.",
        tokenNotInTurn: "{name} no se encontró en el orden de iniciativa.",
        moveTokenPrompt:
          "¿Mover {name} a la capa del mapa para que permanezca visible sin interferir con otras fichas?",
        moveTokenBtn: "Mover {name} a la capa del mapa",
        tokenMoved: "{name} ha sido movido a la capa del mapa.",
        tokenNotFound: "Ficha no encontrada.",
        noActiveConditions: "{name} no tiene condiciones activas que eliminar.",
        deadNoConditions:
          "{name} fue marcado como muerto. No había condiciones activas.",
        scriptReady: "{name} está activo y usas la versión {version}.",
        reachedZeroHp: "{name} alcanzó 0 PV",
        manuallyRemoved: "eliminación manual",
        durationExpired: "su duración expiró",
        markedAsDead: "{name} fue marcado como muerto",
      },
      removal: {
        conditionField: "Condición",
        reasonField: "Razón",
        turnRowField: "Fila de iniciativa",
        markerField: "Marcador",
        notConfigured: "No configurado",
        markerRemoved: "Eliminado ({marker})",
        markerRetained: "Conservado ({marker})",
        rowRemoved: "Eliminado",
        rowMissing: "Ya faltaba",
        manualReason: "Eliminación manual",
      },
      cleanup: {
        orphaned: "Entradas de condición huérfanas",
        stale: "Entradas de condición obsoletas",
        orphanedRows: "Filas de iniciativa huérfanas",
        unusedMarkers: "Marcadores sin usar",
      },
      apply: {
        turnAppended:
          "El objetivo no estaba en el orden de iniciativa; se agregó la fila de condición.",
        turnInserted:
          "Fila de condición insertada debajo de la ficha objetivo.",
      },
    },
    handout: {
      versionLabel: "Versión",
      subtitle: "Gestor de efectos de estado de D&D 5e",
      footerNote:
        "Este folleto se crea y actualiza automáticamente cada vez que se carga el script.",
      overview: {
        heading: "Descripción general",
        body: "Condition Tracker gestiona las condiciones de estado de D&D 5e y los efectos personalizados como filas etiquetadas en el rastreador de turno de Roll20. Aplica condiciones a fichas, rastrea duraciones por orden de iniciativa y elimina automáticamente los efectos caducados al finalizar un turno. Todos los comandos son exclusivos para el GM.",
      },
      quickStart: {
        heading: "Inicio rápido",
        colCommand: "Comando",
        colDesc: "Descripción",
        rows: [
          [
            "!condition-tracker --prompt",
            "Asistente paso a paso — elige condición, fichas y duración de forma interactiva. También disponible como macro ConditionTrackerWizard.",
          ],
          [
            "!condition-tracker --multi-target",
            "Aplicar una condición a varias fichas simultáneamente. También disponible como macro ConditionTrackerMultiTarget.",
          ],
          [
            "!condition-tracker --menu",
            "Abrir el menú principal para aplicar, revisar o eliminar condiciones.",
          ],
        ],
      },
      commandsRef: {
        heading: "Referencia de comandos",
        colFlag: "Opción",
        colDesc: "Descripción",
        rows: [
          ["--prompt", "Interfaz del asistente paso a paso"],
          ["--multi-target", "Aplicar una condición a varias fichas objetivo"],
          [
            "--menu",
            "Mostrar menú principal (añadir remove para el menú de eliminación)",
          ],
          [
            "--source X --target Y --condition Z",
            "Aplicar una condición directamente sin el asistente",
          ],
          [
            "--duration &lt;valor&gt;",
            "Duración para aplicación directa (p. ej. 2 rounds)",
          ],
          [
            "--other &lt;texto&gt;",
            "Texto personalizado para tipos Conjuro / Habilidad / Otro",
          ],
          [
            "--remove &lt;id-condición&gt;",
            "Eliminar una condición específica por su ID único",
          ],
          [
            "--config &lt;opción&gt; &lt;valor&gt;",
            "Ajustar opciones de configuración",
          ],
          [
            "--prompt --subjectPromptBypass true|false",
            "Sobrescribir subjectPromptBypass solo para este comando (también admite --subject-prompt-bypass)",
          ],
          [
            "--cleanup",
            "Reconciliar estado — eliminar condiciones y filas huérfanas",
          ],
          ["--reinstall-macro", "Recrear o actualizar las macros del GM"],
          [
            "--reinstall-handout",
            "Recrear o actualizar el folleto de ayuda localizado",
          ],
          [
            "--lang &lt;locale&gt;",
            "Emitir los mensajes de este comando en una locale adicional (modo bilingüe)",
          ],
          ["--help", "Mostrar una tarjeta de ayuda breve en el chat"],
        ],
      },
      standardConditions: {
        heading: "Condiciones estándar (D&D 5e)",
        colCondition: "Condición",
      },
      customEffects: {
        heading: "Tipos de efectos personalizados",
        colType: "Tipo",
        colNotes: "Notas",
        rows: [
          [
            "🔮 Conjuro",
            "Rastrear un efecto de conjuro nombrado — se te pedirá el nombre del conjuro",
          ],
          [
            "🎯 Habilidad",
            "Rastrear una habilidad de clase o racial — se te pedirá el nombre",
          ],
          [
            "🍀 Ventaja",
            "Registrar ventaja otorgada de una ficha a otra; agrupada con la fuente en la iniciativa",
          ],
          [
            "⬇️ Desventaja",
            "Registrar desventaja impuesta; agrupada con la fuente en la iniciativa",
          ],
          [
            "📝 Otro",
            "Etiqueta personalizada libre — se te pedirá una descripción",
          ],
        ],
      },
      durationOptions: {
        heading: "Opciones de duración",
        intro:
          "El conteo restante se muestra en la columna pr del rastreador de turno y disminuye cuando termina el turno de la ficha ancla.",
        colOption: "Opción",
        colBehaviour: "Comportamiento",
        rows: [
          [
            "Hasta retirar",
            "Permanente — debe eliminarse manualmente mediante el menú o --remove",
          ],
          [
            "Fin del próximo turno del objetivo",
            "Expira cuando termina el próximo turno del objetivo en la iniciativa",
          ],
          [
            "Fin del próximo turno de la fuente",
            "Expira cuando termina el próximo turno de la fuente en la iniciativa",
          ],
          [
            "1 / 2 / 3 / 10 rondas",
            "Cuenta regresiva fija; un decremento por cada fin de turno del ancla",
          ],
        ],
      },
      configuration: {
        heading: "Configuración",
        intro:
          "Usa !condition-tracker --config &lt;opción&gt; &lt;valor&gt; o el botón Configuración en el menú principal.",
        colOption: "Opción",
        colValues: "Valores",
        colDesc: "Descripción",
        rows: [
          [
            "useMarkers",
            "true / false",
            "Aplicar marcadores de estado de Roll20 a las fichas al agregar una condición",
          ],
          [
            "useIcons",
            "true / false",
            "Mostrar códigos de ícono cortos (p. ej. [G]) en las filas del rastreador de turno",
          ],
          [
            "subjectPromptBypass",
            "true / false",
            "Omitir el paso de sujeto opcional para efectos Conjuro / Habilidad / Otro",
          ],
          [
            "healthBar",
            "bar1_value / bar2_value / bar3_value",
            "Barra a vigilar; cuando llega a 0 se le pide al GM que limpie las condiciones",
          ],
          [
            "language",
            "en-US / fr / de / es / pt-BR / ko",
            "Idioma de los mensajes de chat y el folleto de ayuda",
          ],
          [
            "markers.&lt;Condición&gt;",
            "&lt;nombre del marcador&gt;",
            "Reemplazar el marcador usado para una condición específica (p. ej. markers.Grappled grab)",
          ],
        ],
      },
      defaultMarkers: {
        heading: "Marcadores de estado predeterminados",
        colCondition: "Condición",
        colMarker: "Nombre del marcador",
      },
    },
  },

  "pt-BR": {
    conditions: {
      Grappled: { past: "agarrado", verb: "agarra" },
      Restrained: { past: "contido", verb: "contém" },
      Prone: { past: "derrubado", verb: "derruba" },
      Poisoned: { past: "envenenado", verb: "envenena" },
      Stunned: { past: "atordoado", verb: "atordoa" },
      Blinded: { past: "cegado", verb: "cega" },
      Charmed: { past: "encantado", verb: "encanta" },
      Frightened: { past: "apavorado", verb: "apavora" },
      Incapacitated: { past: "incapacitado", verb: "incapacita" },
      Invisible: { past: "invisível", verb: "torna", suffix: "invisível" },
      Paralyzed: { past: "paralisado", verb: "paralisa" },
      Petrified: { past: "petrificado", verb: "petrifica" },
      Unconscious: {
        past: "inconsciente",
        verb: "deixa",
        suffix: "inconsciente",
      },
      Spell: { past: "afetado por uma magia", verb: "lança uma magia em" },
      Ability: {
        past: "afetado por uma habilidade",
        verb: "usa uma habilidade em",
      },
      Advantage: {
        past: "tem vantagem",
        verb: "concede vantagem a",
        noBy: true,
      },
      Disadvantage: {
        past: "tem desvantagem",
        verb: "impõe desvantagem em",
        noBy: true,
      },
    },
    condNames: {
      Grappled: "Agarrado",
      Restrained: "Contido",
      Prone: "Derrubado",
      Poisoned: "Envenenado",
      Stunned: "Atordoado",
      Blinded: "Cegado",
      Charmed: "Encantado",
      Frightened: "Apavorado",
      Incapacitated: "Incapacitado",
      Invisible: "Invisível",
      Paralyzed: "Paralisado",
      Petrified: "Petrificado",
      Unconscious: "Inconsciente",
      Spell: "Magia",
      Ability: "Habilidade",
      Advantage: "Vantagem",
      Disadvantage: "Desvantagem",
      Other: "Outro",
    },
    templates: {
      display: {
        custom: "{emoji} {target} afetado por {effect} ({source})",
        advantage: "{emoji} {source} tem vantagem contra {target}{subject}",
        disadvantage:
          "{emoji} {source} tem desvantagem contra {target}{subject}",
        noBy: "{emoji} {target} {past} ({source})",
        standard: "{emoji} {target} {past} por {source}",
      },
      apply: {
        custom: "{source} aplica {effect} em {target}.",
        advantage: "{source} tem vantagem contra {target}{subject}.",
        disadvantage: "{source} tem desvantagem contra {target}{subject}.",
        withSuffix: "{source} {verb} {target} {suffix}.",
        standard: "{source} {verb} {target}.",
      },
      remove: {
        custom: "{target} não está mais afetado por {effect}.",
        advantage: "{source} não tem mais vantagem contra {target}{subject}.",
        disadvantage:
          "{source} não tem mais desvantagem contra {target}{subject}.",
        noBy: "{target} não está mais {past}.",
        standard: "{target} não está mais {past} por {source}.",
      },
    },
    ui: {
      wizard: {
        selectCondition: "Selecionar condição",
        selectSource: "Selecionar ficha de origem",
        selectTarget: "Selecionar ficha alvo",
        selectSubject: "Selecionar sujeito",
        selectDuration: "Selecionar duração",
        reinstallHandout: "Reinstalar livreto",
        confirmTargetTitle: "Confirmar lista de alvos",
        applyEffectTitle: "Aplicar efeito {condition}",
        noTokens: "Nenhuma ficha nomeada encontrada na página ativa.",
        confirmIntro: "As seguintes fichas receberão a condição:",
        confirmBtn: "Confirmar lista de alvos",
        enterDetails: "Inserir detalhes do efeito",
        noneBtn: "Nenhum",
        subjectDesc: "Selecione quem ou o que aplica o efeito.",
        sourceDesc:
          "Selecione a criatura que está criando ou gerando a condição ou efeito.",
        targetDesc: "Selecione a criatura que receberá a condição ou efeito.",
        otherText: "Texto de condição personalizada",
        effectDetails: "Detalhes de {condition}",
      },
      col: {
        players: "Jogadores",
        npcs: "NPCs",
        conditions: "Condições",
        customEffects: "Efeitos personalizados",
        permanentTurnEnd: "Permanente / Fim de turno",
        rounds: "Rodadas",
        command: "Comando",
        result: "Resultado",
        field: "Campo",
        value: "Valor",
        option: "Opção",
        condition: "Condição",
        marker: "Marcador",
        item: "Item",
        removed: "Removido",
        details: "Detalhes",
        description: "Descrição",
        scenario: "Cenário",
      },
      dur: {
        untilRemoved: "Até ser removido",
        endOfTargetTurn: "Fim do próximo turno do alvo",
        endOfSourceTurn: "Fim do próximo turno da origem",
        round1: "1 rodada",
        round2: "2 rodadas",
        round3: "3 rodadas",
        round10: "10 rodadas",
        custom: "Personalizado",
        customPrompt: "Número de rodadas",
        untilRemovedDisplay: "Até ser removido",
        turnsRemaining: "{n} fim(ns) de turno restante(s)",
      },
      btn: {
        openWizard: "Abrir assistente",
        openMultiTarget: "Abrir assistente multialvo",
        openRemovalList: "Abrir lista de remoção",
        showConfig: "Mostrar configuração",
        runCleanup: "Executar limpeza",
        reinstallMacro: "Reinstalar macro",
        showHelp: "Mostrar ajuda",
      },
      title: {
        menu: "Menu",
        removalMenu: "Remoção — Condition Tracker",
        config: "Configuração",
        configTracker: "Configuração — Condition Tracker",
        help: "Ajuda",
        applied: "Aplicado",
        removed: "Condição removida",
        cleanup: "Limpeza concluída",
        macroReinstalled: "Macro reinstalada",
        handoutReinstalled: "Livreto reinstalado",
        warning: "Aviso",
        error: "Erro",
        turnOrder: "Ordem de iniciativa",
        noConditions: "Sem condições",
        tokenMoved: "Ficha movida",
        markedDead: "Marcado como morto",
        zeroHp: "{name} — 0 PV",
        moveToken: "{name} — Mover ficha?",
        scriptReady: "Script pronto",
      },
      heading: {
        quickActions: "Ações rápidas",
        settings: "Configurações",
        markerMappings: "Mapeamento de marcadores",
        result: "Resultado",
        info: "Informações",
        commandOptions: "Opções de comando",
        promptUi: "Interface do assistente",
        examples: "Exemplos",
        summary: "Resumo",
      },
      msg: {
        noActive: "Nenhuma condição ativa está sendo rastreada.",
        configReset: "Configuração redefinida para os padrões do mod.",
        unknownConfig:
          "Opção de configuração desconhecida. Use --config para ver as configurações disponíveis.",
        macroReinstalled:
          "As macros {wizard} e {multiTarget} foram reinstaladas para todos os GMs atuais.",
        handoutReinstalled: "O livreto de ajuda {handout} foi reinstalado.",
        duplicate:
          "Essa combinação exata de origem, sujeito, alvo, condição e texto personalizado já está ativa.",
        noTargets: "Nenhuma ficha alvo especificada para aplicação múltipla.",
        noSelection:
          "Selecione pelo menos uma ficha no tabuleiro antes de usar --multi-target.",
        invalidIds: "Nenhum ID de ficha válido encontrado na seleção atual.",
        reSelectTokens:
          "Nenhuma das fichas selecionadas originalmente pôde ser encontrada. Selecione novamente e tente de novo.",
        conditionNotFound: "ID de condição não encontrado.",
        gmOnly: "Os comandos do Condition Tracker são exclusivos para o GM.",
        commandFailed:
          "O comando não pôde ser concluído com segurança. Verifique o console da API.",
        sourceTokenNotFound: "A ficha de origem não foi encontrada.",
        targetTokenNotFound: "A ficha alvo não foi encontrada.",
        subjectTokenNotFound: "A ficha do sujeito não foi encontrada.",
        invalidCondition: "A condição deve ser uma das predefinidas ou Outro.",
        subjectOnlyCustom:
          "--subject só é válido para Magia, Habilidade, Vantagem, Desvantagem e Outro.",
        subjectBypassInvalid:
          "--subjectPromptBypass espera true ou false quando um valor é fornecido.",
        customDetailsRequired:
          "Os detalhes de {condition} são obrigatórios. Use --other para fornecê-los.",
        markerConfigFormat:
          "Formato de configuração do marcador: --config marker Grappled=grab",
        markerPredefinedRequired:
          "A configuração do marcador requer um nome de condição predefinido.",
        markerNameRequired:
          "A configuração do marcador requer um nome de marcador não vazio.",
        markerSet: "Marcador de {condition} definido como {marker}.",
        healthBarSet: "Barra de saúde definida como {bar}.",
        boolSet: "{key} definido como {value}.",
        expectedBoolean: "Era esperado true ou false.",
        invalidHealthBar:
          "A barra de saúde deve ser bar1_value, bar2_value ou bar3_value.",
        markersDisabled: "Os marcadores estão desativados.",
        noMarkerConfigured:
          "Nenhum marcador está configurado para esta condição.",
        markerApplied: "Marcador aplicado: {marker}",
        markerPresent: "Marcador já presente: {marker}",
        langSet: "Idioma definido como {locale}.",
        invalidLocale: "Locale inválida. Locales suportadas: {locales}.",
        otherDurationRequiresRounds:
          "A duração Outro requer um número de rodadas, por exemplo --duration 5 rounds.",
        invalidDuration:
          "A duração deve ser Até ser removido, uma opção de fim de turno ou uma contagem positiva de rodadas.",
        zeroHpNoConditions: "{name} chegou a 0 PV e não tem condições ativas.",
        zeroHpConditions:
          "{name} chegou a 0 PV. Escolha as condições a remover:",
        removeAllBtn: "Remover todas as condições de {name}",
        markIncapacitated: "Marcar como incapacitado",
        removeFromTurnOrder: "Remover da ordem de iniciativa",
        alreadyIncapacitated: "{name} já está incapacitado.",
        tokenRemovedFromTurn: "{name} foi removido da ordem de iniciativa.",
        tokenNotInTurn: "{name} não foi encontrado na ordem de iniciativa.",
        moveTokenPrompt:
          "Mover {name} para a camada do mapa para que permaneça visível sem interferir com outras fichas?",
        moveTokenBtn: "Mover {name} para a camada do mapa",
        tokenMoved: "{name} foi movido para a camada do mapa.",
        tokenNotFound: "Ficha não encontrada.",
        noActiveConditions: "{name} não tem condições ativas para remover.",
        deadNoConditions:
          "{name} foi marcado como morto. Nenhuma condição estava ativa.",
        scriptReady: "{name} está ativo e você está usando a versão {version}.",
        reachedZeroHp: "{name} chegou a 0 PV",
        manuallyRemoved: "remoção manual",
        durationExpired: "sua duração expirou",
        markedAsDead: "{name} foi marcado como morto",
      },
      removal: {
        conditionField: "Condição",
        reasonField: "Motivo",
        turnRowField: "Linha de iniciativa",
        markerField: "Marcador",
        notConfigured: "Não configurado",
        markerRemoved: "Removido ({marker})",
        markerRetained: "Mantido ({marker})",
        rowRemoved: "Removido",
        rowMissing: "Já ausente",
        manualReason: "Remoção manual",
      },
      cleanup: {
        orphaned: "Entradas de condição órfãs",
        stale: "Entradas de condição obsoletas",
        orphanedRows: "Linhas de iniciativa órfãs",
        unusedMarkers: "Marcadores não utilizados",
      },
      apply: {
        turnAppended:
          "O alvo não estava na ordem de iniciativa; a linha de condição foi adicionada.",
        turnInserted: "Linha de condição inserida abaixo da ficha alvo.",
      },
    },
    handout: {
      versionLabel: "Versão",
      subtitle: "Gerenciador de efeitos de status de D&D 5e",
      footerNote:
        "Este livreto é criado e atualizado automaticamente cada vez que o script é carregado.",
      overview: {
        heading: "Visão geral",
        body: "Condition Tracker gerencia condições de status do D&D 5e e efeitos personalizados como linhas rotuladas no rastreador de turno do Roll20. Aplique condições a fichas, rastreie durações por ordem de iniciativa e remova automaticamente os efeitos expirados ao final de um turno. Todos os comandos são exclusivos para o GM.",
      },
      quickStart: {
        heading: "Início rápido",
        colCommand: "Comando",
        colDesc: "Descrição",
        rows: [
          [
            "!condition-tracker --prompt",
            "Assistente passo a passo — escolha condição, fichas e duração de forma interativa. Também disponível como macro ConditionTrackerWizard.",
          ],
          [
            "!condition-tracker --multi-target",
            "Aplicar uma condição a várias fichas simultaneamente. Também disponível como macro ConditionTrackerMultiTarget.",
          ],
          [
            "!condition-tracker --menu",
            "Abrir o menu principal para aplicar, revisar ou remover condições.",
          ],
        ],
      },
      commandsRef: {
        heading: "Referência de comandos",
        colFlag: "Opção",
        colDesc: "Descrição",
        rows: [
          ["--prompt", "Interface do assistente passo a passo"],
          ["--multi-target", "Aplicar uma condição a várias fichas alvo"],
          [
            "--menu",
            "Mostrar menu principal (adicionar remove para o menu de remoção)",
          ],
          [
            "--source X --target Y --condition Z",
            "Aplicar uma condição diretamente sem o assistente",
          ],
          [
            "--duration &lt;valor&gt;",
            "Duração para aplicação direta (ex. 2 rounds)",
          ],
          [
            "--other &lt;texto&gt;",
            "Texto personalizado para tipos Magia / Habilidade / Outro",
          ],
          [
            "--remove &lt;id-condição&gt;",
            "Remover uma condição específica pelo seu ID único",
          ],
          [
            "--config &lt;opção&gt; &lt;valor&gt;",
            "Ajustar opções de configuração",
          ],
          [
            "--prompt --subjectPromptBypass true|false",
            "Substituir subjectPromptBypass somente para este comando (também aceita --subject-prompt-bypass)",
          ],
          [
            "--cleanup",
            "Reconciliar estado — remover condições e linhas órfãs",
          ],
          ["--reinstall-macro", "Recriar ou atualizar as macros do GM"],
          [
            "--reinstall-handout",
            "Recriar ou atualizar o livreto de ajuda localizado",
          ],
          [
            "--lang &lt;locale&gt;",
            "Emitir as mensagens deste comando em uma locale adicional (modo bilingüe)",
          ],
          ["--help", "Mostrar um cartão de ajuda breve no chat"],
        ],
      },
      standardConditions: {
        heading: "Condições padrão (D&D 5e)",
        colCondition: "Condição",
      },
      customEffects: {
        heading: "Tipos de efeitos personalizados",
        colType: "Tipo",
        colNotes: "Notas",
        rows: [
          [
            "🔮 Magia",
            "Rastrear um efeito de magia nomeado — você será solicitado a inserir o nome da magia",
          ],
          [
            "🎯 Habilidade",
            "Rastrear uma habilidade de classe ou raça — você será solicitado a inserir o nome",
          ],
          [
            "🍀 Vantagem",
            "Registrar vantagem concedida de uma ficha a outra; agrupada com a origem na iniciativa",
          ],
          [
            "⬇️ Desvantagem",
            "Registrar desvantagem imposta; agrupada com a origem na iniciativa",
          ],
          [
            "📝 Outro",
            "Rótulo personalizado livre — você será solicitado a inserir uma descrição",
          ],
        ],
      },
      durationOptions: {
        heading: "Opções de duração",
        intro:
          "O contador restante é exibido na coluna pr do rastreador de turno e diminui quando o turno da ficha âncora termina.",
        colOption: "Opção",
        colBehaviour: "Comportamento",
        rows: [
          [
            "Até ser removido",
            "Permanente — deve ser removido manualmente pelo menu ou --remove",
          ],
          [
            "Fim do próximo turno do alvo",
            "Expira quando o próximo turno do alvo termina na iniciativa",
          ],
          [
            "Fim do próximo turno da origem",
            "Expira quando o próximo turno da origem termina na iniciativa",
          ],
          [
            "1 / 2 / 3 / 10 rodadas",
            "Contagem regressiva fixa; um decremento por cada fim de turno da âncora",
          ],
        ],
      },
      configuration: {
        heading: "Configuração",
        intro:
          "Use !condition-tracker --config &lt;opção&gt; &lt;valor&gt; ou o botão Configuração no menu principal.",
        colOption: "Opção",
        colValues: "Valores",
        colDesc: "Descrição",
        rows: [
          [
            "useMarkers",
            "true / false",
            "Aplicar marcadores de status do Roll20 às fichas ao adicionar uma condição",
          ],
          [
            "useIcons",
            "true / false",
            "Exibir códigos de ícone curtos (ex. [G]) nas linhas do rastreador de turno",
          ],
          [
            "subjectPromptBypass",
            "true / false",
            "Ignorar a etapa de sujeito opcional para efeitos Magia / Habilidade / Outro",
          ],
          [
            "healthBar",
            "bar1_value / bar2_value / bar3_value",
            "Barra a monitorar; quando chega a 0 o GM é solicitado a limpar as condições",
          ],
          [
            "language",
            "en-US / fr / de / es / pt-BR / ko",
            "Idioma das mensagens de chat e do livreto de ajuda",
          ],
          [
            "markers.&lt;Condição&gt;",
            "&lt;nome do marcador&gt;",
            "Substituir o marcador usado para uma condição específica (ex. markers.Grappled grab)",
          ],
        ],
      },
      defaultMarkers: {
        heading: "Marcadores de status padrão",
        colCondition: "Condição",
        colMarker: "Nome do marcador",
      },
    },
  },
  ko: {
    conditions: {
      Grappled: { past: "붙잡힘", verb: "붙잡음" },
      Restrained: { past: "구속됨", verb: "구속함" },
      Prone: { past: "넘어짐", verb: "넘어뜨림", suffix: "상태" },
      Poisoned: { past: "중독됨", verb: "중독시킴" },
      Stunned: { past: "기절함", verb: "기절시킴" },
      Blinded: { past: "눈이 멂", verb: "눈을 멀게 함" },
      Charmed: { past: "매혹됨", verb: "매혹함" },
      Frightened: { past: "겁에 질림", verb: "겁을 줌" },
      Incapacitated: { past: "무력화됨", verb: "무력화시킴" },
      Invisible: { past: "투명해짐", verb: "투명하게 만듦" },
      Paralyzed: { past: "마비됨", verb: "마비시킴" },
      Petrified: { past: "석화됨", verb: "석화시킴" },
      Unconscious: { past: "의식 불명", verb: "의식 불명으로 만듦" },
      Spell: { past: "주문에 걸림", verb: "주문을 시전함" },
      Ability: { past: "능력의 영향을 받음", verb: "능력을 사용함" },
      Advantage: {
        past: "이점을 가짐",
        verb: "이점을 부여함",
        noBy: true,
      },
      Disadvantage: {
        past: "불이익을 가짐",
        verb: "불이익을 가함",
        noBy: true,
      },
    },
    condNames: {
      Grappled: "붙잡힘",
      Restrained: "구속됨",
      Prone: "넘어짐",
      Poisoned: "중독됨",
      Stunned: "기절함",
      Blinded: "눈이 멂",
      Charmed: "매혹됨",
      Frightened: "겁에 질림",
      Incapacitated: "무력화됨",
      Invisible: "투명화",
      Paralyzed: "마비됨",
      Petrified: "석화됨",
      Unconscious: "의식 불명",
      Spell: "주문",
      Ability: "능력",
      Advantage: "이점",
      Disadvantage: "불이익",
      Other: "기타",
    },
    templates: {
      display: {
        custom: "{emoji} {target} 이(가) {effect}의 영향을 받음 ({source})",
        advantage: "{emoji} {source} 이(가) {target}{subject} 에 대해 이점을 가짐",
        disadvantage:
          "{emoji} {source} 이(가) {target}{subject} 에 대해 불이익을 가짐",
        noBy: "{emoji} {target} 이(가) {past} ({source})",
        standard: "{emoji} {target} 이(가) {source} 에 의해 {past}",
      },
      apply: {
        custom: "{source} 이(가) {target} 에게 {effect} 효과를 적용함.",
        advantage: "{source} 이(가) {target}{subject} 에 대해 이점을 가짐.",
        disadvantage: "{source} 이(가) {target}{subject} 에 대해 불이익을 가짐.",
        withSuffix: "{source} {verb} {target} {suffix}.",
        standard: "{source} {verb} {target}.",
      },
      remove: {
        custom: "{target} 에게 적용된 {effect} 효과가 종료됨.",
        advantage:
          "{source} 이(가) {target}{subject} 에 대해 더 이상 이점을 가지지 않음.",
        disadvantage:
          "{source} 이(가) {target}{subject} 에 대해 더 이상 불이익을 가지지 않음.",
        noBy: "{target} 이(가) 더 이상 {past} 상태가 아님.",
        standard: "{target} 이(가) 더 이상 {source} 에 의해 {past} 상태가 아님.",
      },
    },
    ui: {
      wizard: {
        selectCondition: "상태 선택",
        selectSource: "시전자 토큰 선택",
        selectTarget: "대상 토큰 선택",
        selectSubject: "주체 선택",
        selectDuration: "지속 시간 선택",
        confirmTargetTitle: "대상 목록 확인",
        applyEffectTitle: "{condition} 효과 적용",
        noTokens: "활성 페이지에서 이름이 있는 토큰을 찾을 수 없습니다.",
        confirmIntro: "다음 토큰들에 상태가 적용됩니다:",
        confirmBtn: "대상 목록 확인",
        enterDetails: "효과 상세 내용 입력",
        noneBtn: "없음",
        subjectDesc: "효과를 전달하는 대상이나 항목을 선택하세요.",
        sourceDesc: "상태나 효과를 생성하는 생명체를 선택하세요.",
        targetDesc: "상태나 효과를 받을 생명체를 선택하세요.",
        otherText: "기타 상태 텍스트",
        effectDetails: "{condition} 상세 내용",
      },
      col: {
        players: "플레이어",
        npcs: "NPC",
        conditions: "상태",
        customEffects: "사용자 정의 효과",
        permanentTurnEnd: "영구 / 턴 종료",
        rounds: "라운드",
        command: "명령어",
        result: "결과",
        field: "필드",
        value: "값",
        option: "옵션",
        condition: "상태",
        marker: "마커",
        item: "항목",
        removed: "제거됨",
        details: "상세 내용",
        description: "설명",
        scenario: "시나리오",
      },
      dur: {
        untilRemoved: "제거될 때까지",
        endOfTargetTurn: "대상의 다음 턴 종료 시",
        endOfSourceTurn: "시전자의 다음 턴 종료 시",
        round1: "1 라운드",
        round2: "2 라운드",
        round3: "3 라운드",
        round10: "10 라운드",
        custom: "사용자 정의",
        customPrompt: "라운드 수",
        untilRemovedDisplay: "제거될 때까지",
        turnsRemaining: "{n} 개의 추적된 턴 종료 남음",
      },
      btn: {
        openWizard: "위저드 열기",
        openMultiTarget: "다중 대상 위저드 열기",
        openRemovalList: "제거 목록 열기",
        showConfig: "설정 표시",
        runCleanup: "정리 실행",
        reinstallMacro: "매크로 재설치",
        reinstallHandout: "유인물 재설치",
        showHelp: "도움말 표시",
      },
      title: {
        menu: "메뉴",
        removalMenu: "상태 추적기 제거",
        config: "설정",
        configTracker: "상태 추적기 설정",
        help: "도움말",
        applied: "적용됨",
        removed: "상태 제거됨",
        cleanup: "정리 완료",
        macroReinstalled: "매크로 재설치됨",
        handoutReinstalled: "유인물 재설치됨",
        warning: "경고",
        error: "오류",
        turnOrder: "턴 순서",
        noConditions: "상태 없음",
        tokenMoved: "토큰 이동됨",
        markedDead: "사망으로 표시됨",
        zeroHp: "{name} — 0 HP",
        moveToken: "{name} — 토큰을 이동하시겠습니까?",
        scriptReady: "스크립트 준비됨",
      },
      heading: {
        quickActions: "빠른 작업",
        settings: "설정",
        markerMappings: "마커 매핑",
        result: "결과",
        info: "정보",
        commandOptions: "명령어 옵션",
        promptUi: "프롬프트 UI",
        examples: "예시",
        summary: "요약",
      },
      msg: {
        noActive: "추적 중인 활성 상태가 없습니다.",
        configReset: "설정이 모드 기본값으로 재설정되었습니다.",
        unknownConfig:
          "알 수 없는 설정 옵션입니다. --config 를 사용하여 지원되는 설정을 확인하세요.",
        macroReinstalled:
          "{wizard} 및 {multiTarget} 매크로가 모든 현재 GM 플레이어를 위해 재설치되었습니다.",
        handoutReinstalled: "도움말 유인물 {handout}이(가) 재설치되었습니다.",
        duplicate: "동일한 시전자, 주체, 대상, 상태 및 사용자 정의 텍스트가 이미 활성화되어 있습니다.",
        noTargets: "다중 대상 적용을 위한 대상 토큰이 지정되지 않았습니다.",
        noSelection: "--multi-target 을 사용하기 전에 보드에서 하나 이상의 토큰을 선택하세요.",
        invalidIds: "현재 선택 항목에서 유효한 토큰 ID를 찾을 수 없습니다.",
        reSelectTokens:
          "원래 선택한 토큰을 찾을 수 없습니다. 토큰을 다시 선택하고 다시 시도하세요.",
        conditionNotFound: "상태 ID를 찾을 수 없습니다.",
        gmOnly: "상태 추적기 명령어는 GM 전용입니다.",
        commandFailed:
          "명령어를 안전하게 완료할 수 없습니다. 자세한 내용은 API 콘솔을 확인하세요.",
        sourceTokenNotFound: "시전자 토큰을 찾을 수 없습니다.",
        targetTokenNotFound: "대상 토큰을 찾을 수 없습니다.",
        subjectTokenNotFound: "주체 토큰을 찾을 수 없습니다.",
        invalidCondition: "상태는 미리 정의된 상태 중 하나이거나 '기타'여야 합니다.",
        subjectOnlyCustom:
          "--subject 는 주문, 능력, 이점, 불이익 및 기타 효과에만 유효합니다.",
        subjectBypassInvalid:
          "--subjectPromptBypass 는 값이 제공될 때 true 또는 false를 기대합니다.",
        customDetailsRequired:
          "{condition} 상세 내용이 필요합니다. --other 를 사용하여 제공하세요.",
        markerConfigFormat: "마커 설정 형식: --config marker Grappled=grab",
        markerPredefinedRequired: "마커 설정에는 미리 정의된 상태 이름이 필요합니다.",
        markerNameRequired: "마커 설정에는 비어 있지 않은 마커 이름이 필요합니다.",
        markerSet: "{condition} 마커가 {marker} 로 설정되었습니다.",
        healthBarSet: "체력 바가 {bar} 로 설정되었습니다.",
        boolSet: "{key} 이(가) {value} 로 설정되었습니다.",
        expectedBoolean: "true 또는 false를 기대했습니다.",
        invalidHealthBar: "체력 바는 bar1_value, bar2_value 또는 bar3_value 여야 합니다.",
        markersDisabled: "마커가 비활성화되었습니다.",
        noMarkerConfigured: "이 상태에 대해 설정된 마커가 없습니다.",
        markerApplied: "마커 적용됨: {marker}",
        markerPresent: "마커가 이미 존재함: {marker}",
        langSet: "언어가 {locale} 로 설정되었습니다.",
        invalidLocale: "유효하지 않은 로케일입니다. 지원되는 로케일: {locales}.",
        otherDurationRequiresRounds:
          "기타 지속 시간은 숫자 라운드 수가 필요합니다. 예: --duration 5 rounds.",
        invalidDuration:
          "지속 시간은 '제거될 때까지', 턴 종료 옵션 또는 양수 라운드 수여야 합니다.",
        zeroHpNoConditions: "{name} 의 HP가 0이 되었으며 활성 상태가 없습니다.",
        zeroHpConditions: "{name} 의 HP가 0이 되었습니다. 제거할 상태를 선택하세요:",
        removeAllBtn: "{name} 의 모든 상태 제거",
        markIncapacitated: "무력화됨으로 표시",
        removeFromTurnOrder: "턴 순서에서 제거",
        alreadyIncapacitated: "{name} 은(는) 이미 무력화 상태입니다.",
        tokenRemovedFromTurn: "{name} 이(가) 턴 순서에서 제거되었습니다.",
        tokenNotInTurn: "{name} 을(를) 턴 순서에서 찾을 수 없습니다.",
        moveTokenPrompt:
          "{name} 을(를) 지도 레이어로 이동하여 다른 토큰을 방해하지 않으면서 가시성을 유지하시겠습니까?",
        moveTokenBtn: "{name} 을(를) 지도 레이어로 이동",
        tokenMoved: "{name} 이(가) 지도 레이어로 이동되었습니다.",
        tokenNotFound: "토큰을 찾을 수 없습니다.",
        noActiveConditions: "{name} 에 제거할 활성 상태가 없습니다.",
        deadNoConditions: "{name} 이(가) 사망으로 표시되었습니다. 활성 상태가 없었습니다.",
        scriptReady: "{name} 이(가) 활성화되었으며 버전 {version} 을(를) 사용 중입니다.",
        reachedZeroHp: "{name} 의 HP가 0에 도달함",
        manuallyRemoved: "수동으로 제거됨",
        durationExpired: "지속 시간이 만료됨",
        markedAsDead: "{name} 이(가) 사망으로 표시됨",
      },
      removal: {
        conditionField: "상태",
        reasonField: "이유",
        turnRowField: "턴 추적기 행",
        markerField: "마커",
        notConfigured: "설정되지 않음",
        markerRemoved: "제거됨 ({marker})",
        markerRetained: "유지됨 ({marker})",
        rowRemoved: "제거됨",
        rowMissing: "이미 누락됨",
        manualReason: "수동 제거",
      },
      cleanup: {
        orphaned: "연결이 끊긴 상태 항목",
        stale: "오래된 상태 항목",
        orphanedRows: "연결이 끊긴 턴 추적기 행",
        unusedMarkers: "사용되지 않는 마커",
      },
      apply: {
        turnAppended: "대상이 턴 순서에 없었습니다. 상태 행이 추가되었습니다.",
        turnInserted: "대상 토큰 아래에 상태 행이 삽입되었습니다.",
      },
    },
    handout: {
      versionLabel: "버전",
      subtitle: "D&D 5e 상태 효과 관리자",
      footerNote: "이 유인물은 스크립트가 로드될 때마다 자동으로 생성 및 업데이트됩니다.",
      overview: {
        heading: "개요",
        body: "상태 추적기(Condition Tracker)는 D&D 5e 상태 조건 및 사용자 정의 효과를 Roll20 턴 추적기의 레이블이 지정된 행으로 관리합니다. 토큰에 상태를 적용하고, 이니셔티브 순서에 따라 지속 시간을 추적하며, 턴이 종료될 때 만료된 효과를 자동으로 제거합니다. 모든 명령어는 GM 전용이며 채팅 또는 설치된 매크로를 통해 실행할 수 있습니다.",
      },
      quickStart: {
        heading: "빠른 시작",
        colCommand: "명령어",
        colDesc: "설명",
        rows: [
          [
            "!condition-tracker --prompt",
            "단계별 위저드 — 대화형으로 상태, 토큰 및 지속 시간을 선택합니다. ConditionTrackerWizard 매크로로도 사용할 수 있습니다.",
          ],
          [
            "!condition-tracker --multi-target",
            "여러 토큰에 하나의 상태를 동시에 적용합니다. ConditionTrackerMultiTarget 매크로로도 사용할 수 있습니다.",
          ],
          [
            "!condition-tracker --menu",
            "상태를 적용, 검토 또는 제거할 수 있는 버튼이 있는 메인 관리 메뉴를 엽니다.",
          ],
        ],
      },
      commandsRef: {
        heading: "명령어 참조",
        colFlag: "플래그",
        colDesc: "설명",
        rows: [
          ["--prompt", "대화형 단계별 위저드 UI"],
          ["--multi-target", "여러 대상 토큰에 동시에 상태 적용"],
          ["--menu", "메인 메뉴 표시 (제거 메뉴의 경우 remove 추가)"],
          ["--source X --target Y --condition Z", "위저드 없이 직접 상태 적용"],
          ["--duration &lt;값&gt;", "직접 적용 시 지속 시간 (예: 2 rounds)"],
          ["--other &lt;텍스트&gt;", "주문 / 능력 / 기타 효과 유형에 대한 사용자 정의 텍스트"],
          ["--remove &lt;condition-id&gt;", "고유 ID로 특정 상태 제거"],
          ["--config &lt;옵션&gt; &lt;값&gt;", "구성 설정 조정 (아래 설정 섹션 참조)"],
          [
            "--prompt --subjectPromptBypass true|false",
            "이 명령어에 대해서만 subjectPromptBypass 재정의 (--subject-prompt-bypass 도 지원)",
          ],
          ["--cleanup", "상태 조정 — 연결이 끊긴 상태 및 턴 추적기 행 제거"],
          ["--reinstall-macro", "GM 매크로 재생성 또는 업데이트"],
          ["--reinstall-handout", "현지화된 도움말 유인물 재생성 또는 업데이트"],
          ["--lang &lt;로케일&gt;", "이 명령어의 메시지를 추가 로케일로 출력 (이중 언어 모드)"],
          ["--help", "채팅에 간단한 도움말 카드 표시"],
        ],
      },
      standardConditions: {
        heading: "표준 상태 (D&D 5e)",
        colCondition: "상태",
      },
      customEffects: {
        heading: "사용자 정의 효과 유형",
        colType: "유형",
        colNotes: "참고",
        rows: [
          ["🔮 주문 (Spell)", "명명된 주문 효과 추적 — 주문 이름을 입력하라는 메시지가 표시됩니다."],
          ["🎯 능력 (Ability)", "명명된 클래스 또는 종족 능력 추적 — 이름을 입력하라는 메시지가 표시됩니다."],
          ["🍀 이점 (Advantage)", "한 토큰에서 다른 토큰으로 부여된 이점을 기록합니다. 이니셔티브에서 시전자와 함께 그룹화됩니다."],
          ["⬇️ 불이익 (Disadvantage)", "가해진 불이익을 기록합니다. 이니셔티브에서 시전자와 함께 그룹화됩니다."],
          ["📝 기타 (Other)", "자유 형식 사용자 정의 레이블 — 설명을 입력하라는 메시지가 표시됩니다."],
        ],
      },
      durationOptions: {
        heading: "지속 시간 옵션",
        intro: "남은 카운트는 턴 추적기 pr 열에 표시되며 고정된 토큰의 턴이 종료될 때 감소합니다.",
        colOption: "옵션",
        colBehaviour: "동작",
        rows: [
          ["제거될 때까지", "영구적 — 메뉴 또는 --remove 를 통해 수동으로 제거해야 합니다."],
          ["대상의 다음 턴 종료 시", "이니셔티브에서 대상 토큰의 다음 턴이 종료될 때 만료됩니다."],
          ["시전자의 다음 턴 종료 시", "이니셔티브에서 시전자 토큰의 다음 턴이 종료될 때 만료됩니다."],
          ["1 / 2 / 3 / 10 라운드", "고정된 카운트다운; 고정 토큰의 턴 종료 시마다 1씩 감소합니다."],
        ],
      },
      configuration: {
        heading: "설정",
        intro: "!condition-tracker --config &lt;옵션&gt; &lt;값&gt; 또는 메인 메뉴의 설정 버튼을 사용하세요.",
        colOption: "옵션",
        colValues: "값",
        colDesc: "설명",
        rows: [
          ["useMarkers", "true / false", "상태가 추가될 때 토큰에 Roll20 상태 마커를 적용합니다."],
          ["useIcons", "true / false", "턴 추적기 행에 이모지 대신 짧은 아이콘 코드(예: [G])를 표시합니다."],
          ["subjectPromptBypass", "true / false", "주문 / 능력 / 기타 효과에 대해 선택적인 주체 토큰 단계를 건너뜁니다."],
          ["healthBar", "bar1_value / bar2_value / bar3_value", "모니터링할 토큰 바; 0으로 떨어지면 GM에게 상태 정리를 요청합니다."],
          ["language", "en-US / fr / de / es / pt-BR / ko", "채팅 메시지 및 도움말 유인물의 출력 언어"],
          ["markers.&lt;상태&gt;", "&lt;마커 이름&gt;", "특정 상태에 사용되는 상태 마커를 재정의합니다 (예: markers.Grappled grab)"],
        ],
      },
      defaultMarkers: {
        heading: "기본 상태 마커",
        colCondition: "상태",
        colMarker: "마커 이름",
      },
    },
  },
};

/**
 * Returns a valid locale string, falling back to the default.
 *
 * @param {string} lang Locale string to validate.
 * @returns {string} Validated locale.
 */
export function getLocale(lang) {
  const s = typeof lang === "string" ? lang.trim() : "";
  return VALID_LOCALES.has(s) ? s : DEFAULT_LOCALE;
}

/**
 * Navigates a nested object by splitting key on dots.
 *
 * @param {object} obj Root object.
 * @param {string[]} parts Key path segments.
 * @returns {*} Value at the key path, or undefined.
 */
function getNestedValue(obj, parts) {
  let current = obj;
  for (const part of parts) {
    if (current == null || typeof current !== "object") return undefined;
    current = current[part];
  }
  return current;
}

/**
 * Returns the translated string for a dot-separated key, interpolating {placeholder} vars.
 * Falls back to en-US when the key is missing in the requested locale.
 * No HTML escaping is performed — callers must pre-escape HTML-unsafe values.
 *
 * @param {string} key Dot-separated translation key.
 * @param {string} locale Locale string.
 * @param {object} [vars] Interpolation variables.
 * @returns {string} Translated and interpolated string.
 */
export function t(key, locale, vars = {}) {
  const lang = getLocale(locale);
  const parts = key.split(".");
  let value = getNestedValue(TRANSLATIONS[lang], parts);

  if (value === undefined && lang !== DEFAULT_LOCALE) {
    value = getNestedValue(TRANSLATIONS[DEFAULT_LOCALE], parts);
  }

  if (typeof value !== "string") return key;

  return value.replaceAll(/\{(\w+)\}/g, (_, k) =>
    k in vars ? String(vars[k]) : `{${k}}`,
  );
}

/**
 * Returns the raw translation value at a dot-separated key (any type).
 * Falls back to en-US when the key is missing in the requested locale.
 *
 * @param {string} key Dot-separated translation key.
 * @param {string} locale Locale string.
 * @returns {*} Raw translation value, or undefined.
 */
export function tRaw(key, locale) {
  const lang = getLocale(locale);
  const parts = key.split(".");
  let value = getNestedValue(TRANSLATIONS[lang], parts);
  if (value === undefined && lang !== DEFAULT_LOCALE) {
    value = getNestedValue(TRANSLATIONS[DEFAULT_LOCALE], parts);
  }
  return value;
}

/**
 * Returns locale-specific condition verb data, or null if not available.
 *
 * @param {string} condition Canonical condition name.
 * @param {string} locale Locale string.
 * @returns {{past: string, verb: string, suffix?: string, noBy?: boolean}|null}
 */
export function getConditionLocalData(condition, locale) {
  const lang = getLocale(locale);
  const data = TRANSLATIONS[lang]?.conditions?.[condition];
  return data || null;
}
