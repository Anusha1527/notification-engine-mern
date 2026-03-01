import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import { useToast } from "../components/ToastContext";

const EVENT_OPTIONS = [
  "security_alert",
  "login_attempt",
  "payment_issue",
  "feature_request",
  "promotional_offer",
  "account_update",
  "data_export",
  "password_change",
  "subscription_renewal",
  "unusual_activity",
  "system_maintenance",
  "new_message",
  "friend_request",
  "comment_reply",
  "weekly_summary",
  "monthly_report",
  "billing_reminder",
  "two_factor_auth",
  "account_suspension",
  "privacy_policy_update",
  "api_rate_limit",
  "server_error",
  "user_feedback",
  "security_patch",
  "feature_announcement",
  "downtime_notification",
  "user_onboarding",
  "trial_expiration",
  "password_reset",
  "account_verification",
  "data_breach_alert",
  "new_device_login",
  "session_expiration",
  "feature_deprecation",
  "performance_issue",
  "customer_support_response",
  "system_upgrade",
  "security_scan_result",
  "compliance_notification",
  "user_survey",
  "content_moderation",
  "api_deprecation",
  "feature_usage_tip",
  "account_activity_summary",
  "security_incident_report",
  "data_retention_policy",
  "user_privacy_settings",
  "system_health_check",
  "new_feature_beta",
  "account_recovery",
  "security_advisory",
  "user_engagement_summary",
  "system_outage",
  "feature_request_status",
  "account_deletion_confirmation",
  "security_training_reminder",
  "user_behavior_alert",
  "system_performance_report",
  "new_integration",
  "account_lockout",
  "security_compliance_update",
  "user_access_log",
  "system_resource_usage",
  "new_version_release",
  "account_activity_alert",
  "security_audit_result",
  "user_feedback_request",
  "system_error_report",
  "new_feature_release",
  "account_privilege_change",
  "security_threat_alert",
  "user_retention_summary",
  "system_maintenance_notification",
  "new_user_welcome",
];

export default function SendNotification() {
  const [form, setForm] = useState({
    user_id: "",
    event_type: "",
    message: "",
    source: "auth_service",
  });

  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.addToast({
          message: data.error || "Server error",
          type: "error",
        });
        return;
      }

      // ✅ Timestamp
      const timestamp = new Date().toLocaleString();

      const enhancedResult = {
        ...data,
        timestamp,
        user_id: form.user_id,
      };

      setResult(enhancedResult);

      // ✅ Add to history
      setHistory((prev) => [enhancedResult, ...prev]);

      toast.addToast({
        message: `🔔 ${data.explanation}`,
        type: "success",
      });
    } catch (err) {
      console.error(err);
      toast.addToast({
        message: "Backend not reachable",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // ✅ Decision color helper (USED EVERYWHERE)
  const decisionColor = (decision) => {
    if (decision === "Now") return "bg-red-500 text-white";
    if (decision === "Queue") return "bg-yellow-400 text-black";
    return "bg-gray-500 text-white";
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* SEND FORM */}
      <Card>
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Send Notification
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">User ID</label>
            <input
              name="user_id"
              value={form.user_id}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md"
              placeholder="12345"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Event Type</label>
            <select
              name="event_type"
              value={form.event_type}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-[#0f172a] border border-gray-600 rounded-md"
            >
              <option value="" disabled>
                select an event
              </option>
              {EVENT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-3 py-2 h-24 bg-[#0f172a] border border-gray-600 rounded-md"
              placeholder="Type your notification message here..."
            />
          </div>

          <div className="text-right">
            <Button onClick={handleSend} loading={loading} variant="primary">
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>
        </div>
      </Card>

      {/* RESULT */}
      {result && (
        <Card className="mt-6">
          <h3 className="text-xl font-semibold mb-2">
            Decision Result
          </h3>

          <p>
            <strong>Decision:</strong>
            <span
              className={`ml-2 px-3 py-1 rounded font-semibold ${decisionColor(
                result.decision
              )}`}
            >
              {result.decision.toUpperCase()}
            </span>
          </p>

          <p>
            <strong>Score:</strong> {result.score}
          </p>

          <p>
            <strong>Explanation:</strong> {result.explanation}
          </p>

          <p className="text-sm text-gray-400 mt-2">
            {result.timestamp}
          </p>
        </Card>
      )}

      {/* HISTORY */}
      {history.length > 0 && (
        <Card className="mt-6">
          <h3 className="text-xl font-semibold mb-3">
            Notification History
          </h3>

          <div className="space-y-3">
            {history.map((item, index) => (
              <div
                key={index}
                className="bg-[#0f172a] border border-gray-700 rounded p-3"
              >
                <p><strong>User:</strong> {item.user_id}</p>

                {/* ✅ COLORED DECISION BADGE ADDED */}
                <p>
                  <strong>Decision:</strong>
                  <span
                    className={`ml-2 px-2 py-1 rounded font-semibold ${decisionColor(
                      item.decision
                    )}`}
                  >
                    {item.decision.toUpperCase()}
                  </span>
                </p>

                <p><strong>Score:</strong> {item.score}</p>

                <p className="text-sm text-gray-400">
                  {item.timestamp}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}